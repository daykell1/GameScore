from django.db import models
# Create your models here.
from django.contrib.auth.models import AbstractUser, Group, Permission


class CustomUser(AbstractUser):
    # Adicione campos personalizados, se necessário

    # Adicione related_name para evitar conflitos
    groups = models.ManyToManyField(Group, related_name='customuser_set')
    user_permissions = models.ManyToManyField(
        Permission, related_name='customuser_set'
    )
