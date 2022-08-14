from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render, redirect, get_object_or_404


# from accounts.models import MyUser
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.contrib.auth.models import User
from django.contrib import messages


class CustomUserCreate(generics.CreateAPIView):
    permission_classes = [AllowAny]
    # queryset = MyUser.objects.all()
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                if (User.objects.filter(username=request.data["username"])):
                    response = {"msg": 'username exists'}
                    return Response(response, status=status.HTTP_400_BAD_REQUEST)
            except:
                pass
        print(request.data["username"])

        user = serializer.save()
        response = {"msg": "username gooooooooooood"}
        return Response(response, status=status.HTTP_200_OK)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
