from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
import logging

logger = logging.getLogger(__name__)

def dashboard(request):
    logger.debug('Página de dashboard acessada.')
    return render(request, 'html/index.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            logger.debug(f'Usuário {username} autenticado com sucesso.')
            return redirect('dashboard')
        else:
            logger.debug(f'Falha na autenticação do usuário {username}.')
            return render(request, 'telaDeLogin.html')
    else:
        return render(request, 'telaDeLogin.html')
