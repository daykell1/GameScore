from django.shortcuts import render
from .models import Game
from django.http import HttpResponse

def create(request):
    try:
        # Crie um objeto Game com os detalhes
        super_mario = Game(gamenome='Super Mario World', descricao='Descrição do jogo', nota='', categoria='Adventure')
        
        # Carregue a imagem (foto) do jogo, se você a tiver no local correto e configurou corretamente o upload de arquivos.
        with open('../Game/fotos/super.webp', 'rb') as img_file:
            super_mario.foto.save('super.webp', File(img_file), save=True)

        # Salve o objeto no banco de dados
        super_mario.save()

        return HttpResponse('Jogo criado com sucesso!')
    except Exception as e:
        return HttpResponse(f'Erro ao criar o jogo: {str(e)}')


