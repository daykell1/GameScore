from django.db import models

class Users(models.Model):
    username = models.CharField(max_length=10, unique=True)
    email = models.EmailField(max_length=50)
    senha = models.CharField(max_length=500)