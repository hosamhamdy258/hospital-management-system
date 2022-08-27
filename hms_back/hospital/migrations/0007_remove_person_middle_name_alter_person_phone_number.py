# Generated by Django 4.1 on 2022-08-27 12:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0006_person_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='middle_name',
        ),
        migrations.AlterField(
            model_name='person',
            name='phone_number',
            field=models.CharField(max_length=11, unique=True, validators=[django.core.validators.RegexValidator('^01[0125][0-9]{8}$', 'Please Enter Valid Phone Number')]),
        ),
    ]
