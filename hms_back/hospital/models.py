from asyncio.windows_events import NULL
from email.policy import default
from logging import disable
from django.db import models
from django.contrib.auth.models import User
from datetime import date, datetime
from time import gmtime, strftime
from django.db import models
from django.utils import timezone
import weekday_field



# Create your models here.

week_days = (
    ('monday','Monday'),
    ('tuesday', 'Tuesday'),
    ('wednesday','Wednesday'),
    ('thursday','Thursday'),
    ('friday','Friday'),
    ('saturday','Saturday'),
    ('sunday','Sunday'),
)

class Department(models.Model): 
    name = models.CharField(max_length=255, unique=True)
    desc= models.TextField()
    logo_img=models.ImageField(upload_to='images')
    img=models.ImageField(upload_to='images')
    startDay = models.CharField(max_length=10, choices=week_days, default='monday')
    endDay = models.CharField(max_length=10, choices=week_days, default='friday')
    startTime_Schedule=models.TimeField(default=datetime.now, blank=True)
    endTime_Schedule=models.TimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name


class Patient(models.Model):

    id_number = models.CharField(max_length=14, unique=True)
    # need to changed to first name and last name **done
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, default='', blank=True)
    last_name = models.CharField(max_length=255)
    address = models.TextField(max_length=255)
    birth_date = models.DateField()
    durgs = models.TextField(
        max_length=4000, verbose_name="Durgs Taken", null=True)
    comment = models.TextField(max_length=4000, null=True)

    options = (
        ('male', "Male"),
        ('female', "Female"),
    )
    gender = models.CharField(max_length=6,
                              choices=options, default='male')

    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return age

    @property
    def full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"

    def __str__(self):
        return self.full_name


class Doctor(models.Model):

    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, default='', blank=True)
    img=models.ImageField(upload_to='images')
    last_name = models.CharField(max_length=255)
    id_number = models.CharField(max_length=14, unique=True)
    address = models.TextField(max_length=255)
    birth_date = models.DateField()
    department = models.ForeignKey(
        Department, on_delete=models.CASCADE,)

    options = (
        ('male', "Male"),
        ('female', "Female"),
    )
    gender = models.CharField(max_length=6,
                              choices=options, default='male')

    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return age

    @property
    def full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"

    def __str__(self):
        return self.full_name


class office_admin(models.Model):

    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, default='', blank=True)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    birth_date = models.DateField()
    options = (
        ('male', "Male"),
        ('female', "Female"),
    )
    gender = models.CharField(max_length=6,
                              choices=options, default='male')

    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return age

    @property
    def full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"

    def __str__(self):
        return self.full_name


class reservation(models.Model):
    # validate use only date or date_now
    date = models.DateTimeField()

    # date_now = models.DateTimeField(auto_now_add=True, null=True,)
    date_now = models.DateTimeField(auto_now_add=True)
    # date_now= models.datetime.now().time()
    # date_now = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE,)

    def __str__(self):
        return f"{self.date}"

    class Meta:
        ordering = ('-date_now',)


class medical_record(models.Model):
    description = models.TextField(max_length=4000)
    patient_id = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name="patient_medical_records")
    added_doctor_id = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="doctor_medical_records")
    added_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

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
