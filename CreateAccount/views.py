from django.shortcuts import render
from .models import Users
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse

def create(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['senha']
        user = Users(username=username, email=email, password=make_password(password))
        user.save()
        return HttpResponse("Cadastro feito com sucesso!")
    else:
        return render(request,"telaDeCriarConta.html")
    
