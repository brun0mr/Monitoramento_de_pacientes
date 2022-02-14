from django.urls import path
from .views import DadosView, MedicoView, PacienteView, SensorView, login_api  
from . import views
urlpatterns = [
    path('dados', DadosView.as_view()),
    path('medico', MedicoView.as_view()),
    path('paciente', PacienteView.as_view()),
    path('sensor', SensorView.as_view()),
    path('login/', views.login_api),
    path('disconnect/', views.disconnect),
    path('lista_paciente/', views.lista_paciente)
]
