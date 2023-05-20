from rest_framework import viewsets
from .serializers import AlumnosSerializer
from .models import Alumnos
# Create your views here.

class AlumnosView(viewsets.ModelViewSet):
    serializer_class = AlumnosSerializer
    queryset = Alumnos.objects.all()
