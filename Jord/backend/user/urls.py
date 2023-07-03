from django.urls import path
from . import views
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView

urlpatterns = [
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("User/Register/", UserRegistrationView.as_view(), name="register"),
    # path('User/Register/',views.Registration)
    path("login/", UserLoginView.as_view(), name="login"),
    path("profile/", UserProfileView.as_view(), name="profile"),
    path("cart/", user_cart_items, name="cart"),
    path("addCart/", add_cart_item, name="cart"),
    path("removeCart/", remove_cart_item, name="cart"),
    path("Order/", user_orders, name="cart"),
    path("addOrder/", add_order, name="cart"),
    # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
]
