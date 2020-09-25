# Generated by Django 3.1 on 2020-09-23 19:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20200923_1526'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='BankAccount',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='IFSCCode',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='PermanentBlock',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='PermanentCity',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='PermanentDistrict',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='PermanentPin',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='PermanentState',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='PermanentVillage',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='ReferenceBank',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='RessidentialBlock',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='RessidentialCity',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='RessidentialDistrict',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='RessidentialPin',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='RessidentialState',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='RessidentialVillage',
        ),
        migrations.AlterField(
            model_name='customer',
            name='Category',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='Enterprise_Name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='Gender',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='Organization_Name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='Physically_Handicapped',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.CreateModel(
            name='ResidentialAddress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Village', models.CharField(blank=True, max_length=100, null=True)),
                ('Block', models.CharField(blank=True, max_length=100, null=True)),
                ('City', models.CharField(blank=True, max_length=100, null=True)),
                ('District', models.CharField(blank=True, max_length=100, null=True)),
                ('State', models.CharField(blank=True, max_length=100, null=True)),
                ('Pin', models.IntegerField(blank=True, null=True)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Official_Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Village', models.CharField(blank=True, max_length=100, null=True)),
                ('Block', models.CharField(blank=True, max_length=100, null=True)),
                ('City', models.CharField(blank=True, max_length=100, null=True)),
                ('District', models.CharField(blank=True, max_length=100, null=True)),
                ('State', models.CharField(blank=True, max_length=100, null=True)),
                ('Pin', models.IntegerField(blank=True, null=True)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='BankDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('IFSCCode', models.CharField(blank=True, max_length=100, null=True)),
                ('BankAccount', models.IntegerField(blank=True, null=True)),
                ('ReferenceBank', models.URLField(blank=True, null=True)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]