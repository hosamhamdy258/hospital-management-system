from email.policy import default
from logging import disable
from django.db import models
from django.contrib.auth.models import User
from datetime import date,datetime
from time import gmtime, strftime
from django.db import models
from django.utils import timezone
# Create your models here.


class Person(models.Model):
    id_number = models.CharField(max_length=14, unique=True)
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, default='', blank=True)
    last_name = models.CharField(max_length=255)
    address = models.TextField(max_length=255)
    birth_date = models.DateField()
    options = (
        ('male', "Male"),
        ('female', "Female"),
    )
    gender = models.CharField(max_length=6, choices=options, default='male')
    @property
    def age(self):
        age = date.today().year - self.birth_date.year
        return age

class Department(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name
    class Meta:
        ordering = ('name',) 

class Patient(Person):
    comment = models.TextField(max_length=4000)
    @property
    def full_name(self):
        return f"{self.first_name}  {self.middle_name} {self.last_name}"

    def __str__(self):
        return self.full_name
    class Meta:
        ordering = ('first_name',) 

class Doctor(Person):
    department = models.ForeignKey(
        Department, on_delete=models.CASCADE,)
    @property
    def full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"
    def __str__(self):
        return self.full_name
    class Meta:
        ordering = ('first_name',)

class office_admin(Person):
    @property
    def full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"
    def __str__(self):
        return self.full_name
    class Meta:
        ordering = ('first_name',)  

class reservation(models.Model):
    # validate use only date or date_now
    date = models.DateTimeField()

    # date_now = models.DateTimeField(auto_now_add=True, null=True,)
    date_now = models.DateTimeField(default=timezone.now)
    # date_now= models.datetime.now().time()
    # date_now = strftime("%Y-%m-%d %H:%M:%S", gmtime())

    patient = models.ManyToManyField(Patient,)
    # patient = models.ForeignKey(Patient, on_delete=models.CASCADE,)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE,)
    objects= models.Manager()
    def __str__(self):
        return f"{self.date}"    
    class Meta:
        ordering = ('date',)  

class medical_record(models.Model):
    description = models.TextField(max_length=4000)
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    added_by = models.ForeignKey(Doctor, on_delete=models.CASCADE)
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
    def __str__(self):
        return f"{self.patient_id.full_name} {self.issue_date}"
    class Meta:
        ordering = ('-issue_date',)