#!/usr/bin/env python
#-*- coding: utf-8 -*-
import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard to guess string'
    SSL_DISABLE = False
    '''
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_RECORD_QUERIES = True
    '''
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    # mongodb://user1:password1@localhost/test
    MONGODB_SETTINGS = {
        'db': 'fullteck',#koudaizhuanjia
        'host': 'mongodb://localhost:27017/'
    }

    QCLOUD_MEMCACHED_IP = '10.66.108.120:9101'

config = {
    'development': DevelopmentConfig,
    'default': DevelopmentConfig
}
