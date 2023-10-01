from django.shortcuts import render,redirect
from .models import Users
from django.contrib.auth.hashers import make_password
from django.http import HttpResponse
from django.contrib.auth import authenticate, login

def create(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        senha = request.POST['senha']
        user = Users(username=username, email=email, senha=make_password(senha))
        user.save()
        return HttpResponse("Cadastro feito com sucesso!")
    else:
        return render(request,"telaDeCriarConta.html")
    
    

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')  # Redirecione para a página protegida após o login
        else:
            # Exibir mensagem de erro de login
            return render(request, 'dashboard')