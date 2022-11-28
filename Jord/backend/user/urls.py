from django.urls import path
from . import views

urlpatterns = [
   path('Cart/', views.getCartProducts)
    #path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    #path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
]