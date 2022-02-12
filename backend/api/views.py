from django.shortcuts import render
from rest_framework import generics
from .serializers import MedicoSerializer, DadosSerializer, PacienteSerializer, SensorSerializer
from .models import Dados, Medico, Paciente, Sensor

# Create your views here.

# class DadosView (generics.ListCreateAPIView):
#     queryset = Dados.objects.all()
#     serializer_class = DadosSerializer
    
# class MedicoView (generics.ListCreateAPIView):
#     queryset = Medico.objects.all()
#     serializer_class = MedicoSerializer

# class PacienteView (generics.ListCreateAPIView):
#     queryset = Paciente.objects.all()
#     serializer_class = PacienteSerializer
    
# class SensorView (generics.ListCreateAPIView):
#     queryset = Sensor.objects.all()
#     serializer_class = SensorSerializer
   