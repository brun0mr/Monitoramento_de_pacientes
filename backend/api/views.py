from distutils.log import Log
from django.http import HttpRequest, HttpResponse
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from .serializers import MedicoSerializer, DadosSerializer, PacienteSerializer, SensorSerializer
from .models import Dados, Medico, Paciente, Sensor

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
import json
from django.http import JsonResponse

from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import Medico
from .form import Login_Form

from django.shortcuts import redirect, render

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

@api_view(['POST'])
def login_api(request):
    # result =  str({'status': 'failed', 'token': ''})
    # if request.method == 'POST':
    #     dados_recebidos = json.loads(request.body)
    #     print(dados_recebidos)
    #     check_user = dados_recebidos['username']
    #     check_pass = dados_recebidos['password']
    #     try:
    #         user = User.objects.get(username=check_user)
    #     except:
    #         user = None

        # if user is not None:
            # Token.objects.create(user=user)
            # token = Token.objects.get(user=user)
            # a = Medico.objects.get(Usuario=check_user)
            # a.Token = str(token)
            # a.save()
            # print('ok1')
            # result = str({'status': 'connected','token': str(token)})
    # print(type(result))
    # print(result)
    a = {'teste': 'testador'}
    return JsonResponse(a)

def teste(request):
    return HttpResponse('123');