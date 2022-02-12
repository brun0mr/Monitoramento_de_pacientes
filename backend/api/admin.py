from django.contrib import admin
from .models import Medico, Paciente, Sensor, Dados
# Register your models here.

admin.site.register(Medico)
admin.site.register(Paciente)
admin.site.register(Sensor)
admin.site.register(Dados)