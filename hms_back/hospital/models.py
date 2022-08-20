from logging import disable
from msilib.schema import _Validation_records
from django.db import models
from django.contrib.auth.models import User
from datetime import date, datetime
from time import gmtime, strftime
from django.db import models
from django.utils import timezone
import os
from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator, RegexValidator

from accounts.models import UserAccount


# Create your models here.

ID_NUMBER_REGEX = RegexValidator(r"^[0-9]{14}$", 'Id Number must be 14 numbers')


class Person(models.Model):
    id_number = models.CharField(max_length=14, unique=True, validators=[
                                 ID_NUMBER_REGEX])
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, default='', blank=True)
    last_name = models.CharField(max_length=255)
    address = models.TextField(max_length=255)
    birth_date = models.DateField()
    profile_complete = models.BooleanField(default=False)
    options = (
        ('male', "Male"),
        ('female', "Female"),
    )
    gender = models.CharField(max_length=6, choices=options, default='male')
   
    linked_users = models.OneToOneField(
        UserAccount, related_name='linked_users', on_delete=models.RESTRICT,null=True)
    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return age

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def __str__(self):
        return self.full_name


week_days = (
    ('monday', 'Monday'),
    ('tuesday', 'Tuesday'),
    ('wednesday', 'Wednesday'),
    ('thursday', 'Thursday'),
    ('friday', 'Friday'),
    ('saturday', 'Saturday'),
    ('sunday', 'Sunday'),
)


def check_image(value):
    img_extionsion = os.path.splitext(value.name)[1]

    accepted_extensions = ['.webp', '.jpg', '.png', '.jpeg']
    if not img_extionsion.lower() in accepted_extensions:
        raise ValidationError('Unsupported file extension.')


class Department(models.Model):

    name = models.CharField(max_length=255, unique=True)
    desc = models.TextField()
    logo_img = models.ImageField(upload_to='images', validators=[check_image])
    img = models.ImageField(upload_to='images', validators=[check_image])
    startDay = models.CharField(
        max_length=10, choices=week_days, default='monday')
    endDay = models.CharField(
        max_length=10, choices=week_days, default='friday')
    startTime_Schedule = models.TimeField(default=datetime.now, blank=True)
    endTime_Schedule = models.TimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name


class Patient(Person):

    durgs = models.TextField(
        max_length=4000, verbose_name="Durgs Taken", null=True)
    comment = models.TextField(max_length=4000, null=True)


class Doctor(Person):

    department = models.ForeignKey(
        Department, on_delete=models.CASCADE,)
    img = models.ImageField(upload_to='images', validators=[check_image])


class office_admin(models.Model):
    pass


class reservation(models.Model):
    class Meta:
        ordering = ('-date',)
        constraints = [
            models.UniqueConstraint(
                fields=['date', 'doctor'], name='unique_reservation')
        ]
    # validate use only date or date_now
    date = models.DateTimeField()

    # date_now = models.DateTimeField(auto_now_add=True, null=True,)
    date_now = models.DateTimeField(auto_now_add=True)
    # date_now= models.datetime.now().time()
    # date_now = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE,)

    def __str__(self):
        return f"Patent : {self.patient.full_name} // Doctor : {self.doctor.full_name} // Date : {self.date} "


class medical_record(models.Model):
    diagnosis = models.TextField(max_length=4000)
    recommended_medications = models.TextField(max_length=4000)
    patient_id = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name="patient_medical_records")
    added_doctor_id = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="doctor_medical_records")
    added_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    reservation = models.ForeignKey(
        reservation, on_delete=models.CASCADE, related_name="reservation_medical_records", unique=True)

    def __str__(self):
        return f"{self.patient_id.full_name}"

    class Meta:
        ordering = ('-added_on',)


class receipt(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    issued_by = models.ForeignKey(office_admin, on_delete=models.CASCADE)
    issue_date = models.DateTimeField(default=timezone.now,)
    # price

    def __str__(self):
        return f"{self.patient_id.full_name} {self.issue_date}"

    class Meta:
        ordering = ('-issue_date',)
