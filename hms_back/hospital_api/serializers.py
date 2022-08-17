from rest_framework import serializers
from hospital.models import *


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"


class OfficeAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = office_admin
        fields = "__all__"


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = reservation
        fields = "__all__"


class MedicalRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = medical_record
        fields = "__all__"


class ReceiptSerializer(serializers.ModelSerializer):
    class Meta:
        model = receipt
        fields = "__all__"


class PatientSerializer(serializers.ModelSerializer):
    patient_medical_records = MedicalRecordSerializer(many=True)

    class Meta:
        model = Patient
        fields = "__all__"


class DoctorSerializer(serializers.ModelSerializer):
    # doctor_medical_records = MedicalRecordSerializer(
    #     many=True, allow_null=True)
    # full_name = serializers.Field(source='full_name')
    # age = serializers.Field(source='age')

    class Meta:
        model = Doctor
        fields = ['id', 'full_name', 'address', 'birth_date', 'gender', 'age']


class PatientSerializerReserve(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ['id', 'full_name', ]


class DoctorSerializerReserve(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'full_name', ]

# class ReservationSerializerReserve(serializers.ModelSerializer):
#     class Meta:
#         model = reservation
#         fields = "__all__"