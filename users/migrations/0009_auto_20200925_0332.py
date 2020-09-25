# Generated by Django 3.1 on 2020-09-24 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_customer_koid_no'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='email',
            field=models.EmailField(blank=True, max_length=60, null=True, unique=True, verbose_name='email'),
        ),
    ]