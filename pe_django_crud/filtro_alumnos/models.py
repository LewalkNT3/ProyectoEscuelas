from django.db import models
from django.core.validators import RegexValidator

# Create your models here.


class Alumnos(models.Model):
    TurnoOpciones = (
        ('Tm', 'Mañana'),
        ('Tt', 'Tarde'),
        ('Tn', 'Noche'),
    )

    Escuela = models.CharField(max_length=255, blank=False)
    Fullname = models.CharField(max_length=255, blank=False)
    FechaDeNacimiento = models.DateField(blank=True)
    DNI = models.IntegerField(validators=[
                              RegexValidator(r'^\d+$', 'Ingrese solo números')], blank=True)

    Legajo = models.IntegerField(validators=[RegexValidator(
        r'^\d+$', 'Ingrese solo números')], blank=True)

    telefono = models.CharField(validators=[RegexValidator(
        r'^\+?1?\d{9,15}$', 'Ingrese un número de teléfono válido')], max_length=15, blank=True,)
    Turno = models.CharField(choices=TurnoOpciones, max_length=50, blank=True)
    Curso = models.CharField(max_length=25, blank=False)

    ServicioLocal = models.BooleanField(blank=True)
    ServicioLocalTexto = models.TextField(blank=True)

    Ausentismo = models.BooleanField(blank=True)
    AusentismoTexto = models.TextField(blank=True)

    DEI = models.BooleanField(blank=True)
    DEITexto = models.TextField(blank=True)

    Inclusion = models.BooleanField(blank=True)
    InclusionTexto = models.TextField(blank=True)

    Judicial = models.BooleanField(blank=True)
    JudicialTexto = models.TextField(blank=True)

    Conducta = models.BooleanField(blank=True)
    ConductaTexto = models.TextField(blank=True)

    actualizado = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.Fullname
