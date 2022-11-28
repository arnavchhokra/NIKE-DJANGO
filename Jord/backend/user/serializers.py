from rest_framework import serializers
from .models import CartProducts
from rest_framework.serializers import ModelSerializer


class CartProductsSerializer(ModelSerializer):
    class Meta:
        model = CartProducts
        fields = "__all__"
