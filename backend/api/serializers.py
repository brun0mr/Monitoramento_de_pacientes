from rest_framework import serializers
from .models import Dados, Medico, Paciente, Sensor
from django.contrib.auth.hashers import make_password

class DadosSerializer (serializers.ModelSerializer):
    class Meta:
        model = Dados
        fields = ('__all__')
        
class MedicoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Medico
        fields = ('__all__')
        read_only_fields = ['Id_Medico']
        extra_kwargs = {'Senha': {'write_only': True}}
        
        def create(self, validated_data):
            user = super().create(validated_data)
            user.set_Senha(make_password(validated_data['Senha']))
            user.save()
            return user

    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        try:
            user.set_Senha(make_password(validated_data['Senha']))
            user.save()
        except KeyError:
            pass
        return user
        
        
class PacienteSerializer (serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ('__all__')
        read_only_fields = ['Id_paciente']
        extra_kwargs = {'Senha': {'write_only': True}}
        def create(self, validated_data):
            user = super().create(validated_data)
            user.set_Senha(make_password(validated_data['Senha']))
            user.save()
            return user

    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        try:
            user.set_Senha(make_password(validated_data['Senha']))
            user.save()
        except KeyError:
            pass
        return user
        
class SensorSerializer (serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ('__all__')
        read_only_fields = ['Id_Sensor']
 