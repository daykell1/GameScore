from django.contrib import admin
from django.urls import path, include
from . import views  # Importe a vista que lida com o login

urlpatterns = [
  # Adicione uma rota para a view de login
    path('', views.index_view, name='index'),


]

