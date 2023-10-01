from django.shortcuts import render
from .models import Game
from django.http import HttpResponse
from django.core.files import File
import os

def create(request):
    try:
        # Verifique se um jogo com as mesmas informações já existe
        existing_game = Game.objects.filter(gamenome='Super Mario World').first()

        if existing_game:
            # Se o jogo já existir, atualize seus detalhes
            existing_game.descricao = 'Nova descrição do jogo'
            existing_game.nota = 10  # Atualize a nota, se necessário
            existing_game.categoria = 'Ação'  # Atualize a categoria, se necessário
            existing_game.save()
            return HttpResponse('Jogo atualizado com sucesso!')
        else:
            # Crie um objeto Game com os detalhes
            super_mario = Game(
                gamenome='Super Mario World',
                descricao='Descrição do jogo',
                nota=0,
                categoria='Adventure'
            )

            # Determine o caminho absoluto para a imagem
            image_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../Game/fotos/super.webp')
            
            # Verifique se o arquivo de imagem existe
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    super_mario.foto.save('super.webp', File(img_file), save=True)
            else:
                return HttpResponse('Arquivo de imagem não encontrado!')

            # Salve o objeto no banco de dados
            super_mario.save()

            return HttpResponse('Jogo criado com sucesso!')
    except Exception as e:
        return HttpResponse(f'Erro ao criar/atualizar o jogo: {str(e)}')
    
def create(request):
    try:
        # Verifique se um jogo com as mesmas informações já existe
        existing_game = Game.objects.filter(gamenome='Sonic nos Jogos Olímpicos de Tóquio 2020').first()

        if existing_game:
            # Se o jogo já existir, atualize seus detalhes
            existing_game.descricao = 'Nova descrição do jogo'
            existing_game.nota = 10  # Atualize a nota, se necessário
            existing_game.categoria = 'Ação'  # Atualize a categoria, se necessário
            existing_game.save()
            return HttpResponse('Jogo atualizado com sucesso!')
        else:
            # Crie um objeto Game com os detalhes
            sonic = Game(
                gamenome='Sonic nos Jogos Olímpicos de Tóquio 2020',
                descricao='Sonic nos Jogos Olímpicos de Tóquio 2020 foi lançado em maio de 2020 e reúne diversos personagens presentes na franquia Sonic The Hedgehog. O jogo apresenta 15 modalidades, incluindo karatê e escalada, dois esportes que farão suas estreias nas Olimpíadas de Tóquio.',
                nota=0,
                categoria='Adventure'
            )

            # Determine o caminho absoluto para a imagem
            image_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../Game/fotos/Sonic.png')
            
            # Verifique se o arquivo de imagem existe
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    sonic.foto.save('Sonic.png', File(img_file), save=True)
            else:
                return HttpResponse('Arquivo de imagem não encontrado!')

            # Salve o objeto no banco de dados
            sonic.save()

            return HttpResponse('Jogo criado com sucesso!')
    except Exception as e:
        return HttpResponse(f'Erro ao criar/atualizar o jogo: {str(e)}')
    
def create(request):
    try:
        # Verifique se um jogo com as mesmas informações já existe
        existing_game = Game.objects.filter(gamenome='The Legend of Zelda™: Breath of the Wild').first()

        if existing_game:
            # Se o jogo já existir, atualize seus detalhes
            existing_game.descricao = 'Nova descrição do jogo'
            existing_game.nota = 10  # Atualize a nota, se necessário
            existing_game.categoria = 'Ação'  # Atualize a categoria, se necessário
            existing_game.save()
            return HttpResponse('Jogo atualizado com sucesso!')
        else:
            # Crie um objeto Game com os detalhes
            zelda = Game(
                gamenome='The Legend of Zelda™: Breath of the Wild',
                descricao='Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto. E agora no Nintendo Switch, a sua jornada tem mais liberdade do que nunca. Leve o seu console para qualquer lugar e viva aventuras na pele de Link da maneira que quiser.',
                nota=0,
                categoria='Adventure'
            )

            # Determine o caminho absoluto para a imagem
            image_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../Game/fotos/zelda.avif')
            
            # Verifique se o arquivo de imagem existe
            if os.path.exists(image_path):
                with open(image_path, 'rb') as img_file:
                    zelda.foto.save('zelda.avif', File(img_file), save=True)
            else:
                return HttpResponse('Arquivo de imagem não encontrado!')

            # Salve o objeto no banco de dados
            zelda.save()

            return HttpResponse('Jogo criado com sucesso!')
    except Exception as e:
        return HttpResponse(f'Erro ao criar/atualizar o jogo: {str(e)}')
