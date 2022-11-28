from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('Products/', views.getProducts),
    # path('notes/create/', views.createNote, name="create-note"),
    #path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    #path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),

    path('Products/<str:pk>/', views.getProduct),
]
