from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Department)
admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(office_admin)
admin.site.register(reservation)
admin.site.register(medical_record)
admin.site.register(receipt)
admin.site.register(Person)
