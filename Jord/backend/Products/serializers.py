from rest_framework import serializers
from .models import Products
from rest_framework.serializers import ModelSerializer


class ProductsSerializer(ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"
