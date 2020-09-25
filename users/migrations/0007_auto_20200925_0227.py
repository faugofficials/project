# Generated by Django 3.1 on 2020-09-24 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20200925_0227'),
    ]

    operations = [
        migrations.AddField(
            model_name='bankdetails',
            name='ReferenceBankUrl',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bankdetails',
            name='ReferenceBank',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
