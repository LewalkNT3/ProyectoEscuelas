# Generated by Django 4.2.1 on 2023-05-11 20:52

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filtro_alumnos', '0003_rename_lejago_alumnos_legajo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alumnos',
            name='Ausentismo',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='AusentismoTexto',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='Conducta',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='ConductaTexto',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='DEI',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='DEITexto',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='DNI',
            field=models.IntegerField(blank=True, validators=[django.core.validators.RegexValidator('^\\d+$', 'Ingrese solo números')]),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='FechaDeNacimiento',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='Inclusion',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='InclusionTexto',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='Judicial',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='JudicialTexto',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='Legajo',
            field=models.IntegerField(blank=True, validators=[django.core.validators.RegexValidator('^\\d+$', 'Ingrese solo números')]),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='ServicioLocal',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='ServicioLocalTexto',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='Turno',
            field=models.CharField(blank=True, choices=[('Tm', 'Mañana'), ('Tt', 'Tarde'), ('Tn', 'Noche')], max_length=50),
        ),
        migrations.AlterField(
            model_name='alumnos',
            name='telefono',
            field=models.CharField(blank=True, max_length=15, validators=[django.core.validators.RegexValidator('^\\+?1?\\d{9,15}$', 'Ingrese un número de teléfono válido')]),
        ),
    ]
