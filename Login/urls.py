from django.urls import path
from django.contrib import admin


from . import views

urlpatterns = [

path('', views.login_view, name='login_view'),
path('dashboard/', views.dashboard, name='dashboard'),

]

