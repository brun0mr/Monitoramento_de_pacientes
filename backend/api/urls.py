from django.urls import path
from .views import cadastro, user_login, user_profile, user_logout, DadosView, MedicoView, PacienteView, SensorView, contato, Alerts, About

urlpatterns = [
    


    path('cadastrar', cadastro),
    path('login/', user_login, name='user_login'),
    path('logout/', user_logout),
    path('profile/', user_profile, name='user_profile'),
    path('Contact', contato),
    path('Alerts', Alerts),
    path('About', About),


    path('dados', DadosView.as_view()),
    path('medico', MedicoView.as_view()),
    path('paciente', PacienteView.as_view()),
    path('sensor', SensorView.as_view())
    
]
