# Generated by Django 4.2.1 on 2023-05-11 17:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('filtro_alumnos', '0002_alter_alumnos_curso_alter_alumnos_dni_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='alumnos',
            old_name='Lejago',
            new_name='Legajo',
        ),
    ]
