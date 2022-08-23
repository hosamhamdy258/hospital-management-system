from importlib.util import source_hash
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
    department = serializers.CharField(
        source='doctor.department', read_only=True)

    doctor_name = serializers.CharField(
        source='doctor',
        read_only=True,
    )
    # reservation_medical_records=serializers.MedicalRecordSerializer(
    #     many=True, read_only=True)
    reservation_medical_records = serializers.PrimaryKeyRelatedField(
        many=True, read_only=True)

    patient_name = serializers.CharField(
        source='patient.full_name',
        read_only=True
    )

    class Meta:
        model = reservation
        fields = "__all__"


class MedicalRecordSerializer(serializers.ModelSerializer):

    patient_name = serializers.CharField(
        source="patient_id.full_name", read_only=True)
    doctor_name = serializers.CharField(
        source="added_doctor_id.full_name", read_only=True)
    patient_age = serializers.CharField(
        source="patient_id.age", read_only=True)

    class Meta:
        model = medical_record
        # fields = ["patient_name", "doctor_name", "patient_age",
        #           "diagnosis", "recommended_medications", "added_on"]
        fields = "__all__"


class ReceiptSerializer(serializers.ModelSerializer):
    class Meta:
        model = receipt
        fields = "__all__"


class PatientSerializer(serializers.ModelSerializer):
    patient_medical_records = MedicalRecordSerializer(
        many=True, read_only=True)
# ssss
    patient_reserves = ReservationSerializer(
        many=True, read_only=True)

    class Meta:
        model = Patient
        fields = "__all__"


class DoctorSerializer(serializers.ModelSerializer):
    doctor_medical_records = MedicalRecordSerializer(
        many=True, read_only=True)
    doctor_reserves = ReservationSerializer(
        many=True, read_only=True)
    department_name = serializers.CharField(
        source='department.name',
        read_only=True
    )

    class Meta:
        model = Doctor
        fields = ['id', 'id_number', 'full_name', 'last_name', 'first_name', 'address', 'birth_date',
                  'gender', 'department', 'age', 'img', 'profile_complete', 'linked_users', 'department_name', 'doctor_medical_records', 'doctor_reserves']
        # fields = "__all__"


class PatientSerializerReserve(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = ['id', 'full_name', ]


class DoctorSerializerReserve(serializers.ModelSerializer):
    department_name = serializers.CharField(
        source='department.name',
        read_only=True
    )

    class Meta:
        model = Doctor
        fields = ['id', 'full_name', "img", "department_name"]
        # fields = "__all__"


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"
