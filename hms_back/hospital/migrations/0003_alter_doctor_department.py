# Generated by Django 4.1 on 2022-08-21 12:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0002_alter_doctor_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='department',
            field=models.ForeignKey(default='Doctor', on_delete=django.db.models.deletion.SET_DEFAULT, to='hospital.department'),
        ),
    ]
