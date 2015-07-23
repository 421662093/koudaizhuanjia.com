#!/usr/bin/env python
#-*- coding: utf-8 -*-
from flask import render_template, redirect, url_for, abort, flash, request,\
    current_app, make_response
from flask.ext.login import login_required, current_user
from ..decorators import admin_required, permission_required
'''
from flask.ext.sqlalchemy import get_debug_queries
'''
from . import main
from .forms import ExpertApplyForm
from ..core import common

'''
from .forms import EditProfileForm, EditProfileAdminForm, PostForm,\
    CommentForm
from .. import db
from ..models import Permission, Role, User, Post, Comment
from ..decorators import admin_required, permission_required
'''
from ..models import ExpertApply, collection

# from ..models import Post


@main.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@main.route('/apply', methods=['GET', 'POST'])
def apply():
    
    if request.method == 'POST':
        form = ExpertApplyForm()

        if form.submit():
            if len(request.form.get('name',''))>1 and len(request.form.get('name',''))<17 and len(request.form.get('phone',''))==11:
                if not ExpertApply.isphone(form.phone.data):
                    item = ExpertApply()
                    item.id = collection.get_next_id('expertapply')
                    item.name = form.name.data
                    item.phone = form.phone.data
                    item.save()
                    return '{"info":"认证信息提交成功","status":"y"}'
                else:
                    return '{"info":"您已提交认证信息，无需再次提交","status":"n"}'
            else:
                return '{"info":"您所提交的姓名或手机号码格式错误，请重新填写","status":"n"}'
        # print str(item.id) + '_' + item.name + '_' + item.phone + '_' +
        # item.company + '_' + item.job + '_' + item.remark
    else:
        '''
        item = Event()
        item.event_id = eid
        item.id = collection.get_next_id('events')
        item.title ='西城区新街口北大街74号剧空间剧场(近北京科学'
        item.address = '北京市西城区新街口北大街74号剧空间剧场(近北京科学教育电影制片厂院内)'
        item.content = '北京市西城区新街口北大街74号剧空间剧场(近北京科学教育电影制片厂院内)北京市西城区新街口北大街74号剧空间剧场(近北京科学教育电影制片厂院内)北京市西城区新街口北大街74号剧空间剧场(近北京科学教育电影制片厂院内)'
        item.save()
        '''
        return render_template('apply.html')
