from django.shortcuts import render
from .serializers import ProductsSerializer
from rest_framework import viewsets      
from .models import Products
from django.http import response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from Products import serializers
from .utils import getProductsList, getProductDetail
from django.http import JsonResponse


#class ProductsView(viewsets.ModelViewSet):
  #  serializer_class = ProductsSerializer
  #  queryset = Products.objects.all()


        




@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/Products/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of products'
        },
        {
            'Endpoint': '/Products/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single product object'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):

    if request.method == 'GET':
        return getProductsList(request)

   


@api_view(['GET'])
def getProduct(request, pk):

    if request.method == 'GET':
        return getProductDetail(request, pk)


