# Generated by Django 5.0.6 on 2024-07-07 20:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id_accounts', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id_product', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('price', models.BigIntegerField()),
                ('description', models.CharField(max_length=10000)),
                ('brand', models.CharField(default=None, max_length=50)),
                ('video_transmission', models.CharField(default=None, max_length=50)),
                ('powering', models.CharField(default=None, max_length=50)),
                ('transmitter_protocol', models.CharField(default=None, max_length=50)),
                ('propeller_size', models.CharField(default=None, max_length=50)),
                ('frame_size', models.CharField(default=None, max_length=50)),
                ('power_connector', models.CharField(default=None, max_length=50)),
                ('version', models.CharField(default=None, max_length=50)),
                ('number_of_rating', models.BigIntegerField(default=0)),
                ('overall_rating', models.BigIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Likes',
            fields=[
                ('id_review', models.AutoField(primary_key=True, serialize=False)),
                ('id_accounts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.accounts')),
                ('id_product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.products')),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id_review', models.AutoField(primary_key=True, serialize=False)),
                ('rating', models.BigIntegerField()),
                ('comment', models.CharField(default=None, max_length=1000)),
                ('id_accounts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.accounts')),
                ('id_product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.products')),
            ],
        ),
    ]
