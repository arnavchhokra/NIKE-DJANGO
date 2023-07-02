from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *

#class CartProductsSerializer(ModelSerializer):
   # class Meta:
   #     model = CartProducts
   #     fields = "__all__"

#class CartSerializer(ModelSerializer):
  #class Meta:
  #  model = Cart
   # fields = "__all__"


class UserRegistrationSerializer(serializers.ModelSerializer):
  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
  class Meta:
    model = MyUser
    fields = ['email','name','password','password2']
    extra_kwargs = {
      'password':{'write_only':True}
    }

  def validate(self,attrs): 
    password = attrs.get('password')
    password2 = attrs.get('password2')
    if password != password2:
      raise serializers.ValidationError("Password not same")
    return attrs

  def create(self,validate_data):
    return MyUser.objects.create_user(**validate_data)



class UserLoginSerializer(serializers.ModelSerializer): 
  email = serializers.EmailField(max_length=100) 
  class Meta: 
    model = MyUser 
    fields = ["email", "password"]

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta: 
    model= MyUser
    fields = ['id','email','name','cart']


        #fields = ['id','email','name','cart']