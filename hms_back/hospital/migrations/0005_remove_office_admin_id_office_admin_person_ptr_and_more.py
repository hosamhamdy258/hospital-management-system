# Generated by Django 4.1 on 2022-08-23 18:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0004_alter_reservation_doctor'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='office_admin',
            name='id',
        ),
        migrations.AddField(
            model_name='office_admin',
            name='person_ptr',
            field=models.OneToOneField(auto_created=True, default='', on_delete=django.db.models.deletion.CASCADE,
                                       parent_link=True, primary_key=True, serialize=False, to='hospital.person'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='reservation',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                    related_name='patient_reserves', to='hospital.patient'),
        ),
    ]
