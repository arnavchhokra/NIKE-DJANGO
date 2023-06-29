from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *

class ProductsSerializer(ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"

