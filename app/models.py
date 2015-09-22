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


class Expert(db.Document):  # 专家
    __tablename__ = 'expert'
    meta = {
        'collection': __tablename__,
    }
    _id = db.IntField(primary_key=True)
    phone = db.StringField(default='', max_length=64, required=True, db_field='p')  # 帐号(手机号)
    name = db.StringField(default='', max_length=64, required=True, db_field='n')  # 姓名
    site = db.StringField(default='', max_length=64, db_field='s')  # 常驻区域
    email = db.StringField(default='', max_length=64, db_field='e')  # 邮箱
    weixin = db.StringField(default='', max_length=64, db_field='wx')  # 微信
    qq = db.StringField(default='', max_length=10, db_field='qq')  # QQ
    domainid = db.IntField(default=1, db_field='di')  # 领域分类id
    industryid = db.IntField(default=1, db_field='ii')  # 行业分类id
    job = db.StringField(default='', max_length=64, db_field='j')  # 职位
    date = db.IntField(default=0, db_field='d')  # 创建时间
    intro = db.StringField(default='', db_field='i')  # 简介
    label = db.ListField(default=[], db_field='l')  # 标签
    progress = db.IntField(default=1, db_field='pr')# 审核进度 1 2 3 4
    state = db.IntField(default=0, db_field='sta')# 状态 0未审核 1审核
    
    @staticmethod
    def isphone(phone):
        #查找手机是否存在 >0 存在   =0 不存在
        if len(phone)>0:
            return Expert.objects(phone=phone).count()
        else:
            return -1

    def saveinfo(self):
        self._id = collection.get_next_id(self.__tablename__)
        istrue = Expert.isphone(phone=self.phone)
        if istrue == 0:
            self.date = common.getstamp()
            self.save()

            return self._id
        else:
            return -1