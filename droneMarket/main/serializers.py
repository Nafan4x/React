from rest_framework import serializers

from .models import Accounts, Products, Reviews, Likes


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = '__all__'

    def validate_email(self, value):
        if self.instance:  # это условие исключает проверку email текущего объекта при обновлении
            if Accounts.objects.filter(email=value).exclude(pk=self.instance.pk).exists():
                raise serializers.ValidationError("This email is already in use.")
        elif Accounts.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    def validate_username(self, value):
        if self.instance:  # это условие исключает проверку username текущего объекта при обновлении
            if Accounts.objects.filter(username=value).exclude(pk=self.instance.pk).exists():
                raise serializers.ValidationError("This username is already in use.")
        elif Accounts.objects.filter(username=value).exists():
            raise serializers.ValidationError("This username is already in use.")
        return value


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
