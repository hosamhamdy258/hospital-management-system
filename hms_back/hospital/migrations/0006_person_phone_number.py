# Generated by Django 4.1 on 2022-08-27 12:44

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0005_remove_office_admin_id_office_admin_person_ptr_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='phone_number',
            field=models.CharField(default='', max_length=11, validators=[django.core.validators.RegexValidator('^01[0125][0-9]{8}$', 'Please Enter Valid Phone Number')]),
            preserve_default=False,
        ),
    ]
