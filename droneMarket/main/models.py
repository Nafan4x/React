from django.db import models


class Accounts(models.Model):

    id_accounts = models.AutoField(primary_key=True)
    email = models.CharField(max_length=50, blank=False, null=False)
    password = models.CharField(max_length=50, blank=False, null=False)


class Products(models.Model):

    id_product = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=False, null=False)
    price = models.BigIntegerField(blank=False, null=False)
    description = models.CharField(max_length=10000, blank=False, null=False)
    brand = models.CharField(max_length=50, default=None)
    video_transmission = models.CharField(max_length=50, default=None)
    powering = models.CharField(max_length=50, default=None)
    transmitter_protocol = models.CharField(max_length=50, default=None)
    propeller_size = models.CharField(max_length=50, default=None)
    frame_size = models.CharField(max_length=50, default=None)
    power_connector = models.CharField(max_length=50, default=None)
    version = models.CharField(max_length=50, default=None)
    number_of_rating = models.BigIntegerField(default=0)
    overall_rating = models.BigIntegerField(default=0)


class Reviews(models.Model):

    id_review = models.AutoField(primary_key=True)
    id_accounts = models.ForeignKey(Accounts, on_delete=models.CASCADE, to_field='id_accounts')
    id_product = models.ForeignKey(Products, on_delete=models.CASCADE, to_field='id_product')
    rating = models.BigIntegerField(blank=False, null=False)
    comment = models.CharField(max_length=1000, default=None)


class Likes(models.Model):

    id_review = models.AutoField(primary_key=True)
    id_accounts = models.ForeignKey(Accounts, on_delete=models.CASCADE, to_field='id_accounts')
    id_product = models.ForeignKey(Products, on_delete=models.CASCADE, to_field='id_product')
