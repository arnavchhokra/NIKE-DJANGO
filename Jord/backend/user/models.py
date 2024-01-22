from django.db import models
from Products.models import *
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.



class Cart(models.Model):
    cartproduct = models.ManyToManyField("Products.Products", null = True, related_name='cartss', blank = True)
    #CartProducts = models.ForeignKey(Products, blank=True, null=True, on_delete=models.PROTECT)
    #CartProducts = models.ManyToManyField(CartItem, blank=True)


class MyUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, password2=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )
        cart = Cart.objects.create()  # Create the corresponding Cart instance
        user.user_cart = cart
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user



class MyUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    user_cart  = models.OneToOneField(Cart,on_delete=models.CASCADE,null=True)
    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def save(self, *args, **kwargs):
        if self._state.adding:  # Check if the instance is being created
            super().save(*args, **kwargs)  # Save the user instance first   Assign the Cart instance to the user's cart field
            self.save()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin



class OrderItem(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.PROTECT)
    OrderTime = models.TimeField(auto_now_add=True)
