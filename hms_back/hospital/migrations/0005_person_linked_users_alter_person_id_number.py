# Generated by Django 4.1 on 2022-08-20 14:47

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hospital', '0004_alter_person_id_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='linked_users',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='linked_users', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='person',
            name='id_number',
            field=models.CharField(max_length=14, unique=True, validators=[django.core.validators.RegexValidator('^[0-9]{14}$', 'Id Number must be 14 numbers')]),
        ),
    ]