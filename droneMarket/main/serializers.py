from rest_framework import serializers

from .models import Accounts, Products, Reviews, Likes


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = '__all__'


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=50)
