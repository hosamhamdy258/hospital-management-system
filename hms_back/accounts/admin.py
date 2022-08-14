# from django.contrib import admin
# from .models import MyUser
# from django.contrib.auth.admin import UserAdmin
# from django.forms import TextInput, Textarea, CharField
# from django import forms
# from django.db import models


# class UserAdminConfig(UserAdmin):
#     model = MyUser
#     search_fields = ('email', 'username',)
#     list_filter = ('email', 'username', 'is_active', 'is_admin')
#     ordering = ('-create_date',)
#     list_display = ('email', 'username','is_active', 'is_admin')
#     fieldsets = (
#         (None, {'fields': ('email', 'username',)}),
#         ('Permissions', {'fields': ('is_admin', 'is_active')}),

#     )
#     formfield_overrides = {
#         models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
#     }
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'username', 'password1', 'password2', 'is_active', 'is_admin')}
#          ),
#     )


# admin.site.register(MyUser, UserAdminConfig)
