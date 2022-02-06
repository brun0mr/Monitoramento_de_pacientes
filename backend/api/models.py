from django.db import models

# Create your models here.

class Medico(models.Model):
    Id_Medico = models.BigAutoField(primary_key=True)
    CPF =       models.IntegerField( blank=False)
    Nome =      models.CharField(max_length=255,blank=False)
    Idade =     models.IntegerField( blank=False)
    Sexo =      models.TextChoices( 'M','F' )
    Especialidade = models.CharField(max_length=255,blank=False)
    CEP =       models.IntegerField( blank=False)
    Endereco =  models.CharField(max_length=255,blank=False)
    Usuario =    models.CharField(max_length=255,blank=False, unique=True)
    Senha =     models.CharField(max_length=50)
    
class Paciente(models.Model):
    Id_paciente = models.BigAutoField(primary_key=True)
    CPF =       models.IntegerField( blank=False)
    Nome =      models.CharField(max_length=255,blank=False)
    Idade =     models.IntegerField( blank=False)
    Sexo =      models.TextChoices( 'M','F' )
    Comorbidades = models.CharField(max_length=255,blank=True)
    CEP =       models.IntegerField( blank=False)
    Endereco =  models.CharField(max_length=255,blank=False)
    Responsavel = models.CharField(max_length=255,blank=True)
    Telefone_Responsavel = models.IntegerField(blank=True)
    Usuario =    models.CharField(max_length=255,blank=False, unique=True)
    Senha =      models.CharField(max_length=50)
    Id_Medico =  models.ForeignKey(Medico, on_delete=models.CASCADE)
    
class Sensor(models.Model):
    Id_Sensor= models.BigAutoField(primary_key=True)
    Temperatura = models.FloatField(max_length=10, blank=True)
    Pressao = models.FloatField(max_length=10, blank=True)
    Oxigenacao = models.FloatField(max_length=10, blank=True)
    Frequencia_Cardiaca = models.FloatField(max_length=10, blank=True)
    Data_Hora = models.DateTimeField()
    Id_Medico =  models.ForeignKey(Medico, on_delete=models.CASCADE)
    Id_Paciente = models.OneToOneField(Paciente, on_delete=models.CASCADE)
    

    