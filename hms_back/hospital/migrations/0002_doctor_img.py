# Generated by Django 4.1 on 2022-08-18 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='img',
            field=models.ImageField(default='', upload_to='images'),
            preserve_default=False,
        ),
    ]
