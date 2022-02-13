from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from django.contrib.auth import authenticate, login, logout
from rest_framework import generics
from .serializers import MedicoSerializer, DadosSerializer, PacienteSerializer, SensorSerializer
from .models import Dados, Medico, Paciente, Sensor
from .forms import UserForm

# Create your views here.

def home(request):
    template_name = 'home.html'
    context = {}
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            f = form.save()
            f.set_password(f.password)
            f.save()
            messages.success(request, 'Usuário cadastrado com sucesso.')
            return redirect('http://127.0.0.1:8000/login/')
    form = UserForm()
    context['form'] = form
    return render(request, template_name, context)

def user_login(request):
    #configurar frontend
    template_name = 'user_login.html'
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('api:user_profile')
        else:
            print('Error')

    return render(request, template_name, {})

@login_required(login_url='/login/')
def user_profile(request):
    template_name = 'user_profile.html'
    return render(request, template_name, {})


@login_required(login_url='/login/')
def user_logout(request):
    logout(request)
    messages.success(request, 'Você saiu do sistema.')
    return redirect('api:home')



class DadosView (generics.ListCreateAPIView):
    queryset = Dados.objects.all()
    serializer_class = DadosSerializer
    
class MedicoView (generics.ListCreateAPIView):
    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer

class PacienteView (generics.ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    
class SensorView (generics.ListCreateAPIView):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer
   