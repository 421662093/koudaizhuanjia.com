#!/usr/bin/env python
#-*- coding: utf-8 -*-
from datetime import datetime
from flask.ext.mongoengine.wtf import model_form
from mongoengine import EmbeddedDocument, EmbeddedDocumentField

from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import (
    TimedJSONWebSignatureSerializer as Serializer, BadSignature, SignatureExpired)
import hashlib

from app.exceptions import ValidationError
from flask import current_app, request, url_for
from flask.ext.login import UserMixin, AnonymousUserMixin
from . import db, login_manager
from core import common


class Permission:
    USER = 0x01
    LIST_USER = 0x11
    EDIT_USER = 0x12
    DISCOVERY = 0x02
    INDEX_DISCOVERY = 0x21
    ADMINISTER = 0x80

class ExpertApply(db.Document):
    __tablename__ = 'expertapply'
    meta = {
        'collection': __tablename__,
    }
    _id = db.IntField(primary_key=True)
    name = db.StringField(
        default='', max_length=32, db_field='n')  # 姓名
    phone = db.StringField(default='', max_length=20,  db_field='p') #手机号
    date = db.IntField(default=common.getstamp(), db_field='d') # 创建时间

    @staticmethod
    def getlist(eid=0,index=1, pagesize=10):

    	pageindex =(index-1)*pagesize
        return ExpertApply.objects().order_by("-_id").skip(pageindex).limit(pagesize)

    @staticmethod
    def getcount(eid=0):
        return ExpertApply.objects.count()

    @staticmethod
    def isphone(phone):
        #.exclude('password_hash') 不包含字段
        return ExpertApply.objects(phone=phone)


class AnonymousUser(AnonymousUserMixin):

    def can(self, permissions):
        return False

    def is_administrator(self):
        return False

login_manager.anonymous_user = AnonymousUser


@login_manager.user_loader
def load_user(user_id):
    return User.objects(id=user_id)


class collection(db.Document):
    meta = {
        'collection': 'collection',
    }
    name = db.StringField(max_length=30, required=True)
    index = db.IntField(required=True)

    @staticmethod
    def get_next_id(tablename):
        doc = collection.objects(name=tablename).modify(inc__index=1)
        if doc:
            return doc.index + 1
        else:
            collection(name=tablename, index=1).save()
            return 1
