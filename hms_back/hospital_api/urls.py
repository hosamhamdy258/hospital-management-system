"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from .views import *
# app_name = 'hms/'
urlpatterns = [
    path('department/', DepartmentSerializerList.as_view(), name='department'),
    path('department/<int:pk>', DepartmentSerializerDetails.as_view(), name='department'),

    path('patient/', PatientSerializerList.as_view(), name='patient'),
    path('doctor/', DoctorSerializerList.as_view(), name='doctor'),
    path('doctor/<int:pk>', DoctorSerializerDetails.as_view(), name='doctor'),
   
    path('office/', OfficeAdminSerializerList.as_view(), name='office'),
    path('reserve/', ReservationSerializerList.as_view(), name='reserve_list'),
    path('reserve/<int:pk>', ReservationSerializerDetails.as_view(), name='reserve_details'),
    path('record/', MedicalRecordSerializerList.as_view(), name='record'),
    # path('receipt/', ReceiptSerializerList.as_view(), name='receipt'),
    path('record/<int:pk>', MedicalRecordSerializerDetails.as_view(), name='record'),
    path('list/patient/', ReservationSerializerPatientList.as_view(), name='list_patient'),
    # path('list/patientReservation/', ReservationSerializerPatientList.as_view(), name='list_patient_reservation'),

    path('list/doctor/', ReservationSerializerDoctorList.as_view(), name='list_doctor'),
    path('list/upcomingreservations/', UpcomingReservationSerializerList.as_view(), name='list_reserve'),
    # path('list/pastreservations/<int:doctor>', PastReservationSerializerList.as_view(), name='list_past_reserve'),

    path('patient/<int:pk>', PatientSerializerDetails.as_view(), name='patientdetails'),
    # path('person/<int:pk>', PersonSerializerDetails.as_view(), name='persondetails'),

]
