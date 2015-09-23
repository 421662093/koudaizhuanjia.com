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
        try:
            _type = request.args.get('type',0,type=int)
            phone = request.form['phone']
            code = common.strtoint(request.form['code'],0)
            if _type==1:

                name = request.form['name']
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
                            exp_info = Expert.objects(phone=phone).first()
                            return '{"ret":'+str(exp_info.progress)+'}' #手机号已存在
                        else:
                            return '{"ret":1}'
                    else:
                        return '{"ret":-2}' #验证码错误
                else:
                    return '{"ret":-1}' #提交数据格式错误
            elif _type==2:
                exp_info = Expert.objects(phone=phone).first()
                if exp_info!=None:
                    if  exp_info.progress==1:
                        succeed = 0
                        exp = Expert()
                        exp.school = request.form['school']
                        exp.company = request.form['company']
                        exp.job = request.form['job']
                        exp.domainid = common.strtoint(request.form['domainid'],0)
                        exp.weixin = request.form['weixin']
                        exp.sina = request.form['sina']
                        exp.zhihu = request.form['zhihu']
                        exp.other = request.form['other']
                        exp.label = request.form['label']
                        exp.intro_one = request.form['intro_one']
                        exp.intro_two = request.form['intro_two']
                        exp.phone = phone

                        if len(exp.school)==0:
                            succeed+=1
                        if len(exp.company)==0:
                            succeed+=1
                        if len(exp.job)==0:
                            succeed+=1
                        if len(exp.intro_one)==0:
                            succeed+=1
                        if len(exp.intro_two)==0:
                            succeed+=1
                        if succeed==0:
                            rv =common.strtoint(mc.get('code_'+phone),0)
                            if code==0:
                                issuc = exp.updateinfo(_type=2)

                                if issuc==1:
                                    
                                    return '{"ret":2}' #更新成功
                                else:
                                    return '{"ret":-3}'
                            else:
                                return '{"ret":-2}' #验证码错误
                        else:
                            return '{"ret":-1}' #提交数据格式错误
                    else:
                        return '{"ret":'+str(exp_info.progress)+'}' #个性化信息已填写
                else:
                    return '{"ret":-5}' #手机号不存在
            elif _type==3:
                exp_info = Expert.objects(phone=phone).first()
                if exp_info!=None:
                    if  exp_info.progress==2:
                        succeed = 0
                        exp = Expert()

                        exp.topic_title = request.form['topictitle']
                        exp.topic_cause = request.form['topiccause']
                        exp.topic_content = request.form['topiccontent']
                        exp.per_info = request.form['perinfo']
                        exp.req = request.form['req']

                        exp.online_pri = common.strtoint(request.form['onlinepri'],0)
                        exp.offline_pri = common.strtoint(request.form['offlinepri'],0)
                        exp.online_time = common.strtoint(request.form['onlinetime'],0)
                        exp.offline_time = common.strtoint(request.form['offlinetime'],0)

                        exp.phone = phone

                        if len(exp.topic_title)==0:
                            succeed+=1
                        if len(exp.topic_cause)==0:
                            succeed+=1
                        if len(exp.topic_content)==0:
                            succeed+=1
                        if len(exp.per_info)==0:
                            succeed+=1
                        if exp.online_pri==0:
                            succeed+=1
                        if exp.offline_pri==0:
                            succeed+=1

                        if succeed==0:
                            rv =common.strtoint(mc.get('code_'+phone),0)
                            if code==0:
                                issuc = exp.updateinfo(_type=3)
                                if issuc==1:
                                    return '{"ret":3}' #更新成功
                                else:
                                    return '{"ret":-3}'
                            else:
                                return '{"ret":-2}' #验证码错误
                        else:
                            return '{"ret":-1}' #提交数据格式错误
                    else:
                        return '{"ret":'+str(exp_info.progress)+'}' #个性化信息已填写
                else:
                    return '{"ret":-5}' #手机号不存在
        except Exception,e:
            print e
            return '{"ret":0}'
    else:
        return render_template('becomeexpert.html')
