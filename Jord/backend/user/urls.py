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
    path("addcart/<int:product_id>", add_to_cart, name="cart"),
    path("removecart/<int:product_id>", remove_from_cart, name="cart"),
    path("cart/", view_cart, name="cartview"),
    # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
]
