# Generated by Django 4.2.6 on 2023-10-15 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('CreateAccount', '0005_alter_users_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='groups',
            field=models.ManyToManyField(related_name='custom_users', to='auth.group'),
        ),
        migrations.AlterField(
            model_name='users',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='custom_users', to='auth.permission', verbose_name='user permissions'),
        ),
    ]
