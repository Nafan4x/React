# Generated by Django 5.0.6 on 2024-07-09 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_accounts_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accounts',
            name='username',
            field=models.CharField(max_length=50),
        ),
    ]
