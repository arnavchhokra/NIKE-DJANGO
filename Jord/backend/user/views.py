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


#class ProductsView(viewsets.ModelViewSet):
  #  serializer_class = ProductsSerializer
  #  queryset = Products.objects.all()



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


@api_view(['GET'])
def getCartProducts(request):

    if request.method == 'GET':
        return getCartProductsList(request)

   




