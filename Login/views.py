from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from django.http import HttpResponse
from django.contrib.auth import login  as login_django# Importando o modelo CustomUser


def login_view(request):
    if request.method == 'GET':
        return render(request, 'Login/telaDeLogin.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('senha')

        print( email)
        print (password)

        user = authenticate(request, email=email, password= password)
        print (user)
        if user is not None:
            login_django(request, user)
            return redirect('index')
        else:
            return HttpResponse('Email ou senha inválidos',status=401)