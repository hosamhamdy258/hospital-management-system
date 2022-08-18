
from rest_framework import generics
from .serializers import *
from rest_framework.response import Response
from rest_framework import status


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


class MedicalRecordSerializerList(generics.ListCreateAPIView):
    queryset = medical_record.objects.all()
    serializer_class = MedicalRecordSerializer


class MedicalRecordSerializerDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = medical_record.objects.all()
    serializer_class = MedicalRecordSerializer


class ReceiptSerializerList(generics.ListCreateAPIView):
    queryset = receipt.objects.all()
    serializer_class = ReceiptSerializer
############################################################################
# working


class ReservationSerializerPatientList(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializerReserve

# working


class ReservationSerializerDoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializerReserve


class ReservationSerializerList(generics.ListCreateAPIView):
    queryset = reservation.objects.all()
    serializer_class = ReservationSerializer

    def post(self, request, *args, **kwargs):
        serializer = ReservationSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                response = {"details": "Resevation created successfully"}
                return Response(response, status=status.HTTP_200_OK)
            except:
                pass
        response = {"details": 'Resevation exists'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


class ReservationSerializerDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = reservation.objects.all()
    serializer_class = ReservationSerializer
