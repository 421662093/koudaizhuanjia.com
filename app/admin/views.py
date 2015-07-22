#!/usr/bin/env python
#-*- coding: utf-8 -*-
from flask import render_template, redirect, url_for, abort, flash, request,\
    current_app, make_response
from flask.ext.login import login_required, current_user, logout_user
from . import admin
from .decorators import permission_required
from .authentication import auth
from ..models import Permission, ExpertApply
from ..core import common


@admin.route('/expertapplylist')
@admin.route('/expertapplylist/<int:index>', methods=['GET', 'POST'])
#@permission_required(Permission.LIST_USER)
#@login_required
#@admin_required
@auth.login_required
#@permission_required(Permission.USER)
def expertapply_list(index=1):

    if request.method == 'POST':
        pass
    else:
    	pagesize = 8
    	count = ExpertApply.getcount()
    	tpcount = common.getpagecount(count,pagesize)
    	if index>tpcount:
    		index = tpcount
        ea_list = ExpertApply.getlist(index=index,pagesize=pagesize)
        func = {'stamp2time': common.stamp2time}
        return render_template('admin/expertapply_list.html', list=ea_list, common=func,pagecount=tpcount,index=index)

@admin.route('/logout')
def logout():
    logout_user()
    return jsonify(msg='用户已登出')
