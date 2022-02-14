
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from .serializers import MedicoSerializer, DadosSerializer, PacienteSerializer, SensorSerializer
from .models import Dados, Medico, Paciente, Sensor
import json
from django.http import JsonResponse

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Medico

from random import randint

# Create your views here.

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

@csrf_exempt
def login_api(request):
    result = {'status': 'failed', 'token': ''}
    if request.method == 'POST':
        dados_recebidos = json.loads(request.body)
        check_user = dados_recebidos['username']
        check_pass = dados_recebidos['password']
        eh_medico = 0
        try:
            user = User.objects.get(username=check_user)
        except:
            user = None

        try:
            _ = Medico.objects.get(Usuario=check_user)
            eh_medico = 1
        except:
            eh_medico = 0
            
        if user is not None:
            Token.objects.create(user=user)
            token = Token.objects.get(user=user)
            a = Medico.objects.get(Usuario=check_user)
            a.Token = str(token)
            a.save()
            result = ({'status': 'connected', 'medico': str(eh_medico), 'token': str(token)})
    print(result)
    return JsonResponse(result)

@csrf_exempt
def disconnect(request):
    if request.method == 'POST':
        dados = json.loads(request.body)
        token = dados['token']
        user = dados['username']
        print(user)
        try:
            user__ = User.objects.get(username=user)
            x = Token.objects.get(user=user__)
            if str(x) == token:
                x.delete()
        except:
            x = None
    return JsonResponse({})

@csrf_exempt
def lista_paciente(request):
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
        if autorizado == True:
            pacientes = Paciente.objects.all()
            l = {}
            for paciente in pacientes:
                l[paciente.Nome] = str([0,randint(36, 42),randint(60,130),randint(80, 100), randint(400, 500)])
            return JsonResponse(l)

    return JsonResponse({})

