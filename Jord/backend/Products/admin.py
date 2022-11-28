from django.contrib import admin

# Register your models here.
from .models import Products 

#class ProductsAdmin(admin.ModelAdmin):
   # list = ('name','price','desc','image')

#admin.site.register(Products, ProductsAdmin)


admin.site.register(Products)