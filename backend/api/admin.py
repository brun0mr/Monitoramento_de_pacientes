from django.contrib import admin

# Register your models here.
from .models import Medico, Paciente, Sensor, Dados


admin.site.register(Medico)
admin.site.register(Paciente)
admin.site.register(Sensor)
admin.site.register(Dados)