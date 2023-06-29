from django.shortcuts import render
from .serializers import CartProductsSerializer
from rest_framework import viewsets      
from .models import CartProducts
from django.http import response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from Products import serializers
from .utils import getCartProductsList
from django.http import JsonResponse


from .models import *
from .serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import renderers
from rest_framework import permissions




#class ProductsView(viewsets.ModelViewSet):
  #  serializer_class = ProductsSerializer
  #  queryset = Products.objects.all()


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }



class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token':token,'msg':'Registration Success'},status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(password=password, email=email)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token':token,"msg": "Login Successful"}, status=status.HTTP_200_OK)
            else:
                return Response(
                    {
                        "errors": {
                            "non_field_errors": ["Email or Password is not valid"]
                        }
                    },
                    status=status.HTTP_404_NOT_FOUND
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class UserProfileView(APIView):
    def get(self,request,format=None):
        serializer = UserProfileSerializer(request.user)
        if(request.user.is_authenticated):
        #permission_classes = [IsAuthenticated]
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Not authenticated'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/Cart/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of  cart products'
        }
    ]
    return Response(routes)



   




