# Generated by Django 4.2.2 on 2023-06-29 20:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_remove_cartproducts_image_remove_cartproducts_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myuser',
            name='cart',
        ),
    ]