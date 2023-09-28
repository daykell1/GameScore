from django.shortcuts import render
from .models import Game
from django.http import HttpResponse

def create(request):
    SuperMario = Game (gamenome = 'Super Mário World', descricao = '', nota = '', Categoria = 'Adventure', foto = 'super.webp')
    SuperMario.save()
