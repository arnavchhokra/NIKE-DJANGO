# Generated by Django 4.2.3 on 2024-01-18 00:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0014_cart_cartproduct'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='item',
        ),
        migrations.DeleteModel(
            name='CartItem',
        ),
    ]
