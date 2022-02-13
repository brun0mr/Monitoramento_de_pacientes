from django.urls import path
from .views import home, user_login, user_profile, user_logout, DadosView, MedicoView, PacienteView, SensorView

urlpatterns = [
    


    path('', home),
    path('login/', user_login, name='user_login'),
    path('logout/', user_logout),
    path('profile/', user_profile, name='user_profile'),



    path('dados', DadosView.as_view()),
    path('medico', MedicoView.as_view()),
    path('paciente', PacienteView.as_view()),
    path('sensor', SensorView.as_view())
    
]
