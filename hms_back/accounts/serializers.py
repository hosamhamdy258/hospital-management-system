# from rest_framework import serializers
# from .models import MyUser
from django.contrib.auth.models import User
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers


# class CustomUserSerializer(serializers.ModelSerializer):
#     """
#     Currently unused in preference of the below.
#     """
#     email = serializers.EmailField(required=True,)
#     username = serializers.CharField(required=True)
#     password = serializers.CharField(min_length=8, write_only=True)

#     class Meta:
#         # model = MyUser
#         model = User
#         fields = ('email', 'username', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

# def create(self, validated_data):
#     password = validated_data.pop('password', None)
#     # as long as the fields are the same, we can just use this
#     instance = self.Meta.model(**validated_data)
#     if password is not None:
#         instance.set_password(password)
#     instance.save()
#     return instance

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer, serializers.ModelSerializer):
    profile_complete = serializers.BooleanField(
        source='linked_users.profile_complete', read_only=True)

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'is_doctor',
                  'is_emp', 'is_active', 'is_staff', 'is_superuser', "linked_users", "profile_complete")
        # fields = '__all__'
