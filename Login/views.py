from django.shortcuts import render, redirect

from django.contrib.auth import authenticate
from django.http import HttpResponse
from django.contrib.auth import login  as login_django# Importando o modelo CustomUser

def dashboard(request):
    if request.method == "GET":
        email = request.POST.get('email')  # Coletando o email do formulário
        senha = request.POST.get('senha')
        return render(request, 'index.html')

    else:
        email=request.POST.get('email')
        senha=request.POST.get('senha')

        user = user.objects.filter(email=email)

        if user:
            return HttpResponse(' ja existe um usuário com esse email')
        user = user.objects.createuser(email=email, senha= senha)

        
def login_view(request):
    if request.method == 'GET':
        return render(request, 'telaDeLogin.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        user = authenticate(request, email=email, senha=senha)

        if user is not None:
            login_django(request, user)
            return redirect('index')
        else:
            return HttpResponse('Email ou senha inválidos',status=401)