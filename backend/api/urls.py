from atexit import register
from django.urls import path
from .views import DadosView, MedicoView, PacienteView, SensorView, login_api 
from . import views
urlpatterns = [
    path('login/', views.login_api),
    path('disconnect/', views.disconnect),
    path('receive_data/', views.receive_data),
    path('register/', views.register),
    path('lista_paciente/', views.lista_paciente),
    path('lista_dados/', views.lista_dados),
    path('lista_sensores/', views.lista_sensores),
    path('lista_medicos/', views.lista_medicos),
    path('lista_notificacoes/', views.lista_notificacoes)
]
