# Generated by Django 4.1 on 2022-08-19 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0005_doctor_is_doctor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='is_doctor',
            field=models.BooleanField(default=True, editable=False),
        ),
    ]
