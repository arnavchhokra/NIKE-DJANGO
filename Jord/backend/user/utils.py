from rest_framework.response import Response
from .models import CartProducts
from .serializers import CartProductsSerializer



def getCartProductsList(request):
    Product = CartProducts.objects.all().order_by('-id')
    serializer = CartProductsSerializer(Product, many=True)
    return Response(serializer.data)



