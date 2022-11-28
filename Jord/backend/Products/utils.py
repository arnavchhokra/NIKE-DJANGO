from rest_framework.response import Response
from .models import Products
from .serializers import ProductsSerializer


def getProductsList(request):
    Product = Products.objects.all().order_by('-id')
    serializer = ProductsSerializer(Product, many=True)
    return Response(serializer.data)


def getProductDetail(request, pk):
    Product = Products.objects.get(id=pk)
    serializer = ProductsSerializer(Product, many=False)
    return Response(serializer.data)


