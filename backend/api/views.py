from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from .serializers import MedicoSerializer, DadosSerializer, PacienteSerializer, SensorSerializer
from .models import Dados, Medico, Paciente, Sensor, Notificacoes
import json
from django.http import JsonResponse

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


import datetime

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
def receive_data(request):
    
    if request.method == 'POST':
        dados = json.loads(request.body)
        temp = dados['Temperatura']
        bpm = dados['Frequencia_Cardiaca']
        oxi = dados['Oxigenacao']
        pressao = dados['Pressao']
        Id_Sensor = dados['Id_Sensor']
        Data_Hora = dados['Data_Hora']
        print('ok0')
        try:
            sensor = Sensor.objects.get(Id_Sensor=Id_Sensor)
            print('ok1')
            if (sensor):
                Dados.objects.create(
                    Id_Sensor_id = sensor,
                    Temperatura=temp,
                    Pressao = pressao,
                    Oxigenacao=oxi,
                    Frequencia_Cardiaca = bpm,
                    Data_Hora=datetime.datetime.now()
                )
                
                
                medico = Medico.objects.get(Id_Medico=sensor.Id_Medico.Id_Medico)
                
                if (float(temp) > 38):
                    Notificacoes.objects.create(
                        Id_Medico = medico,
                        texto = "Alerta de temperatura Alta"
                    )
                    print('notificacao Temp')
                if (float(pressao) > 12):
                    Notificacoes.objects.create(
                        Id_Medico = medico,
                        texto = "Alerta de pressao Alta"
                    )
                    print('notificacao Pressao')
                if (float(oxi) < 90):
                    Notificacoes.objects.create(
                        Id_Medico = medico,
                        texto = "Alerta de oxigenacao baixa"
                    )
                    print('notificacao saturacao')
                if (float(bpm) < 60):
                    Notificacoes.objects.create(
                        Id_Medico = medico,
                        texto = "Alerta de batimento cardiaco baixo"
                    )
                    print('notificacao bpm')
                
            
                print('ok3')
        except:
            return JsonResponse({"status": "False"})

        print('ok4')
    return JsonResponse({"status": "True"})

@csrf_exempt
def lista_paciente(request):
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
        if autorizado == True:
            pacientes = Paciente.objects.all()
            l = {}
            for paciente in pacientes:
                try:
                    sensor = Sensor.objects.filter(Id_Paciente=paciente.Id_paciente)
                    dados = Dados.objects.filter(Id_Sensor_id_id = sensor[0].Id_Sensor)
                    #temp,bpm,o2,press
                    l[paciente.Nome] = str([paciente.Id_paciente,dados[0].Temperatura,dados[0].Frequencia_Cardiaca,dados[0].Oxigenacao,dados[0].Pressao])
                except:
                    pass
            return JsonResponse(l)
            

    return JsonResponse({})


@csrf_exempt
def lista_dados(request):
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
        if autorizado == True:
            dados = Dados.objects.all()
            l = {}
            for dado in dados:                    
                l[dado.id] = str([dado.Data_Hora,dado.Temperatura,dado.Frequencia_Cardiaca,dado.Oxigenacao,dado.Pressao])
            return JsonResponse(l)
    return JsonResponse({})

@csrf_exempt
def lista_sensores(request):
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
        if autorizado == True:
            
            sensores = Sensor.objects.all()
            l = {}
            for sensor in sensores:      
                medico = Medico.objects.get(Id_Medico= sensor.Id_Medico) 
                paciente = Paciente.objects.get(Id_Paciente= sensor.Id_Paciente)  
                l[sensor.Id_Sensor] = str([sensor.Id_Medico,medico.Nome,paciente.Id_Paciente,paciente.Nome,sensor.Id_Sensor])
            return JsonResponse(l)
    return JsonResponse({})

@csrf_exempt
def lista_medicos(request):
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
        if autorizado == True:
            
            medicos = Medico.objects.all()
            l = {}
            for medico in medicos:       
                l[medico.Id_Medico] = str([medico.Nome,medico.Especialidade,medico.telefone])
            return JsonResponse(l)
    return JsonResponse({})

@csrf_exempt
def lista_notificacoes(request):
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
        if autorizado == True:
            
            notificacoes = Notificacoes.objects.all()
            l = {}
            for notificacao in notificacoes:       
                l[notificacao.id] = str([notificacao.Id_Medico.Id_Medico,notificacao.texto])
            return JsonResponse(l)
    return JsonResponse({})

@csrf_exempt
def register(request):
    #verificar se o token é de um medico que pode cadastrar
    if request.method == 'POST':
        autorizado = False
        try:
            dados = json.loads(request.body)
            token = dados['token']
            Medico.objects.get(Token=token)
            autorizado = True
        except:
            autorizado = False
            return JsonResponse({'status': 'error'})

        # cadastrar
        try:
            dados = json.loads(request.body)
            nome = dados['name']
            username = dados['username']
            cpf = dados['cpf']
            password = dados['password']
            sexo = dados['sexo']
            idade = dados['idade']
            telefone = dados['telefone']
            email = dados['email']
            comorbidades = dados['comorbidades']
            nome_parente = dados['nome_parente']
            tel_parente = dados['tel_parente']
            email_parente = dados['email_parente']
            cep = dados['cep']
            endereco = dados['endereco']
            especialidade = dados['especialidade']
            if dados['type'] == 'medico':
                Medico.objects.create(
                    CPF=cpf,
                    Nome=nome,
                    Idade=idade,
                    Sexo = sexo,
                    Especialidade=especialidade,
                    CEP = cep,
                    Endereco=endereco,
                    Usuario=username,
                )
                User.objects.create(
                    username=username,
                    password=password
                )
            elif dados['type'] == 'paciente':
                print('ok0')
                medico = Medico.objects.last()
                Paciente.objects.create(
                    CPF=cpf,
                    Nome=nome,
                    Idade=idade,
                    Sexo = sexo,
                    Comorbidades=comorbidades,
                    CEP=cep,
                    Endereco=endereco,
                    Responsavel=nome_parente,
                    Telefone_Responsavel=tel_parente,
                    Usuario=username,
                    Id_Medico=medico,
                )
                User.objects.create(
                    username=username,
                    password=password
                )
            return JsonResponse({'status': 'ok'})
        except:
            print()
            return JsonResponse({'status': 'error'})
    return JsonResponse({'status': 'error'})

