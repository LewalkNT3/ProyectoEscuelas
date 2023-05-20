from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'ListaDeAlumnos', views.AlumnosView, 'Alumnos')

urlpatterns = [
    path('alumnos/', include(router.urls)),
    path('docs/', include_docs_urls(title="alumnosAPI"))
]
