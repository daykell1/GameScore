# Generated by Django 4.2.5 on 2023-10-14 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CreateAccount', '0004_rename_senha_users_password_users_groups_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='email',
            field=models.EmailField(max_length=50, unique=True),
        ),
    ]