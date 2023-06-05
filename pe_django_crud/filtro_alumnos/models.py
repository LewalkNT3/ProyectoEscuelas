from django.db import models
from django.core.validators import RegexValidator

# Create your models here.


class Alumnos(models.Model):
    TurnoOpciones = (
        ('Tm', 'Mañana'),
        ('Tt', 'Tarde'),
        ('Tn', 'Noche'),
    )

    EscuelasOpciones = (
        ('ES N°37', 'ES N°37'),
        ('ES N°46', 'ES N°46'),
    )

    CursoOpciones = (
        ('1ro 1ra', '1ro 1ra'),
        ('1ro 2da', '1ro 2da'),
        ('2do 1ra', '2do 1ra'),
        ('2do 2da', '2do 2da'),
        ('3ro 1ra', '3ro 1ra'),
        ('3ro 2da', '3ro 2da'),
        ('4to 1ra', '4to 1ra'),
        ('4to 2da', '4to 2da'),
        ('5to 1ra', '5to 1ra'),
        ('5to 2da', '5to 2da'),
        ('6to 1ra', '6to 1ra'),
        ('6to 2da', '6to 2da'),

        ('1ro 1ra', '1ro 1ra'),
        ('1ro 2da', '1ro 2da'),
        ('1ro 3ra', '1ro 3ra'),
        ('1ro 4ta', '1ro 4ta'),
        ('2do 1ra', '2do 1ra'),
        ('2do 2da', '2do 2da'),
        ('2do 3ra', '2do 3ra'),
        ('2do 4ta', '2do 4ta'),
        ('3ro 1ra', '3ro 1ra'),
        ('3ro 2da', '3ro 2da'),
        ('3ro 3ra', '3ro 3ra'),
        ('3to 4ta', '3ro 4ta'),
        ('4to ArLi', '4to ArLi'),
        ('4to Com', '4to Com'),
        ('5to ArLi', '5to ArLi'),
        ('5to Com', '5to Com'),
        ('6to ArLi', '6to ArLi'),
        ('6to Com', '6to Com'),

    )

    Escuela = models.CharField(
        choices=EscuelasOpciones, max_length=255, blank=False)
    Fullname = models.CharField(max_length=255, blank=False)
    FechaDeNacimiento = models.DateField(blank=True)
    DNI = models.IntegerField(validators=[
                              RegexValidator(r'^\d+$', 'Ingrese solo números')], blank=True)

    Legajo = models.IntegerField(validators=[RegexValidator(
        r'^\d+$', 'Ingrese solo números')], blank=True)

    telefono = models.CharField(validators=[RegexValidator(
        r'^\+?1?\d{9,15}$', 'Ingrese un número de teléfono válido')], max_length=15, blank=True,)
    Turno = models.CharField(choices=TurnoOpciones, max_length=50, blank=True)
    Curso = models.CharField(choices=CursoOpciones, max_length=25, blank=False)

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
