# Generated by Django 2.2 on 2020-06-03 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_level', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message_POST',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]