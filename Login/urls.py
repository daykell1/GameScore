from django.urls import path
from . import views
urlpatterns = [
    path('',views.login_view,name='login_view'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('telaDeCriarConta/', views.tela_de_criar_conta, name='tela_de_criar_conta'),
]