from django.db import models

class Game(models.Model):
    gamenome = models.CharField(max_length=50)
    descricao = models.CharField(max_length=10000)  # Corrigi o tipo de campo para descrição
    nota = models.IntegerField()
    categoria = models.CharField(max_length=20)
    foto = models.ImageField(upload_to='fotos/')
