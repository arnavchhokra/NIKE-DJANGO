# Generated by Django 4.2.3 on 2024-01-18 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_products_price'),
        ('user', '0013_orderitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='cartproduct',
            field=models.ManyToManyField(blank=True, null=True, to='Products.products'),
        ),
    ]
