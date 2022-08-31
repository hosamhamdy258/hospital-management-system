
from rest_framework import generics
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly


# Create your views here.


class DepartmentSerializerList(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class DepartmentSerializerDetails(generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class PatientSerializerList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]


class DoctorSerializerList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class OfficeAdminSerializerList(generics.CreateAPIView):
    queryset = office_admin.objects.all()
    serializer_class = OfficeAdminSerializer
    permission_classes = [IsAuthenticated]


class MedicalRecordSerializerList(generics.CreateAPIView):
    queryset = medical_record.objects.all()
    serializer_class = MedicalRecordSerializer


class MedicalRecordSerializerDetails(generics.RetrieveUpdateAPIView):
    queryset = medical_record.objects.all()
    serializer_class = MedicalRecordSerializer
    permission_classes = [IsAuthenticated]


class ReceiptSerializerList(generics.ListCreateAPIView):
    queryset = receipt.objects.all()
    serializer_class = ReceiptSerializer


class ReservationSerializerPatientList(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializerReserve
    permission_classes = [IsAuthenticated]


class ReservationSerializerDoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializerReserve
    permission_classes = [IsAuthenticatedOrReadOnly]


class ReservationSerializerList(generics.ListCreateAPIView):
    queryset = reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

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


class ReservationSerializerDetails(generics.DestroyAPIView):
    queryset = reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]


class PatientSerializerDetails(generics.RetrieveAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]


class PersonSerializerDetails(generics.RetrieveUpdateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class UpcomingReservationSerializerList(generics.ListAPIView):
    # queryset = reservation.up_coming_reservations.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        time = datetime.now()
        return reservation.objects.all().filter(date__gt=time).order_by("date")


class PastReservationSerializerList(generics.RetrieveAPIView):
    # queryset = reservation.up_coming_reservations.all()
    serializer_class = ReservationSerializer

    def get_queryset(self):
        time = datetime.now()
        return reservation.objects.all().filter(date__lt=time).order_by("date")


class DoctorSerializerDetails(generics.RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated]
