from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
    
def dashboard(request):
    # Lógica para renderizar a página de destino após o login
    return render(request, '../html/index.html')
    
    
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')  # Redirecione para a página de dashboard
        else:
            # Exibir mensagem de erro de login
            return render(request, 'telaDeLogin.html')
    else:
        return render(request, 'telaDeLogin.html')
        
