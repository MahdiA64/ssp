# Generated by Django 4.1.3 on 2023-01-28 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studyspaceapp', '0005_studyspace_floor'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('study_space', models.CharField(max_length=255)),
                ('rating', models.PositiveIntegerField()),
                ('description', models.CharField(max_length=500)),
            ],
        ),
    ]