#!/usr/bin/env python
#-*- coding: utf-8 -*-
from flask.ext.wtf import Form

from wtforms import StringField, TextAreaField, BooleanField, SelectField,\
    SubmitField
from wtforms.validators import Required, Length, Email, Regexp
from wtforms import ValidationError
from flask.ext.pagedown.fields import PageDownField


class ExpertApplyForm(Form):
    name = StringField('name', validators=[Length(2, 16)])
    phone = StringField('phone', validators=[Length(0, 12)])
    submit = SubmitField('Submit')
