# Generated by Django 4.1.3 on 2022-12-24 13:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='city',
        ),
        migrations.RemoveField(
            model_name='account',
            name='date_of_birth',
        ),
        migrations.RemoveField(
            model_name='account',
            name='profile_image',
        ),
    ]
