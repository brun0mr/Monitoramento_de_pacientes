from django.db import models

# Create your models here.

class Medico(models.Model):
    Id_Medico = models.BigAutoField(primary_key=True)
    CPF =       models.IntegerField( blank=False)
    Nome =      models.CharField(max_length=255,blank=False)
    Idade =     models.IntegerField( blank=False)
    Sexo =      models.CharField(max_length=1,blank=False, default='?')
    telefone =  models.CharField(max_length=255,blank=False)
    Especialidade = models.CharField(max_length=255,blank=False)
    CEP =       models.IntegerField( blank=False)
    Endereco =  models.CharField(max_length=255,blank=False)
    Usuario =    models.CharField(max_length=255,blank=False, unique=True)
    # Senha =     models.CharField(max_length=50)
    Token = models.CharField(max_length=45, blank=True)
    
class Paciente(models.Model):
    Id_paciente = models.BigAutoField(primary_key=True)
    CPF =       models.IntegerField( blank=False)
    Nome =      models.CharField(max_length=255,blank=False)
    Idade =     models.IntegerField( blank=False)
    Sexo =      models.CharField(max_length=1,blank=False ,default='?')
    telefone =  models.CharField(max_length=255,blank=False)
    Comorbidades = models.CharField(max_length=255,blank=True)
    CEP =       models.IntegerField( blank=False)
    Endereco =  models.CharField(max_length=255,blank=False)
    Responsavel = models.CharField(max_length=255,blank=True)
    Telefone_Responsavel = models.IntegerField(blank=True)
    Usuario =    models.CharField(max_length=255,blank=False, unique=True)
    # Senha =      models.CharField(max_length=50)
    Id_Medico =  models.ForeignKey(Medico, on_delete=models.CASCADE)
    Token = models.CharField(max_length=45, blank=True)
    
    

class Sensor(models.Model):
    Id_Sensor= models.BigAutoField(primary_key=True)
    Id_Medico =  models.ForeignKey(Medico, on_delete=models.CASCADE)
    Id_Paciente = models.OneToOneField(Paciente, on_delete=models.CASCADE)
    
    
class Dados(models.Model):
    id = models.BigAutoField(primary_key=True)
    Id_Sensor_id= models.ForeignKey(Sensor,on_delete=models.CASCADE)
    Temperatura = models.FloatField(max_length=10, blank=True)
    Pressao = models.FloatField(max_length=10, blank=True)
    Oxigenacao = models.FloatField(max_length=10, blank=True)
    Frequencia_Cardiaca = models.FloatField(max_length=10, blank=True)
    Data_Hora = models.DateTimeField()


class Notificacoes(models.Model):
    id = models.BigAutoField(primary_key=True)
    Id_Medico =  models.ForeignKey(Medico, on_delete=models.CASCADE)
    texto = models.CharField(max_length=255,blank=True)
    
