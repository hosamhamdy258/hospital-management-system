# Generated by Django 4.1 on 2022-08-12 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0002_patient_durgs_alter_patient_comment_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reservation',
            name='patient',
        ),
        migrations.AddField(
            model_name='reservation',
            name='patient',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='hospital.patient'),
        ),
    ]
