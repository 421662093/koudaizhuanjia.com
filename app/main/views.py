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
from .. import mc
'''
from .forms import EditProfileForm, EditProfileAdminForm, PostForm,\
    CommentForm
from .. import db
from ..models import Permission, Role, User, Post, Comment
from ..decorators import admin_required, permission_required
'''
from ..models import ExpertApply, collection,Expert

# from ..models import Post


@main.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@main.route('/phoneindex', methods=['GET', 'POST'])
def phoneindex():
    return render_template('phoneindex.html')

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
                    item.date = common.getstamp()
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

@main.route('/phoneapply', methods=['GET', 'POST'])
def phoneapply():
    return render_template('phoneapply.html')

@main.route('/becomeexpert', methods=['GET', 'POST'])
def becomeexpert():
    if request.method == 'POST':
        _type = request.args.get('type',0,type=int)
        name = request.form['name']
        phone = request.form['phone']
        code = common.strtoint(request.form['code'],0)
        email = request.form['email']
        site = request.form['site']

        succeed = 0
        if len(name)==0:
            succeed+=1
        if len(phone)==0:
            succeed+=1
        #if code==0:
        #    succeed+=1
        if len(email)==0:
            succeed+=1
        if len(site)==0:
            succeed+=1
        print str(succeed)
        if succeed==0:
            rv =common.strtoint(mc.get('code_'+phone),0)
            if code==0:

                exp = Expert()
                exp.name = name
                exp.phone = phone
                exp.email = email
                exp.site = site
                issuc = exp.saveinfo()

                if issuc==-1:
                    return '{"ret":-3}' #手机号已存在
                else:
                    return '{"ret":1}'
            else:
                return '{"ret":-2}' #验证码错误
        else:
            return '{"ret":-1}' #提交数据格式错误

    else:
        return render_template('becomeexpert.html')
