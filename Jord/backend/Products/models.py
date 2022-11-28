from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()
    price = models.IntegerField()
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name
