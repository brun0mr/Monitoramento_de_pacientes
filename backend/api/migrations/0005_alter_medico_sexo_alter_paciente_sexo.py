# Generated by Django 4.0.2 on 2022-02-11 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_medico_sexo_paciente_sexo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medico',
            name='Sexo',
            field=models.CharField(default='?', max_length=1),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='Sexo',
            field=models.CharField(default='?', max_length=1),
        ),
    ]