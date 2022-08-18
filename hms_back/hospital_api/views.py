
from rest_framework import generics
from .serializers import *

# Create your views here.


class DepartmentSerializerList(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class PatientSerializerList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer


class DoctorSerializerList(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class OfficeAdminSerializerList(generics.ListCreateAPIView):
    queryset = office_admin.objects.all()
    serializer_class = OfficeAdminSerializer


class ReservationSerializerList(generics.ListCreateAPIView):
    queryset = reservation.objects.all()
    serializer_class = ReservationSerializer


class MedicalRecordSerializerList(generics.ListCreateAPIView):
    queryset = medical_record.objects.all()
    serializer_class = MedicalRecordSerializer


class MedicalRecordSerializerDetails(generics.RetrieveUpdateAPIView):
    queryset = medical_record.objects.all()
    serializer_class = MedicalRecordSerializer


class ReceiptSerializerList(generics.ListCreateAPIView):
    queryset = receipt.objects.all()
    serializer_class = ReceiptSerializer


class ReservationSerializerPatientList(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializerReserve


class ReservationSerializerDoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializerReserve

class PatientSerializerDetails(generics.RetrieveUpdateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer