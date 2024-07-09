from rest_framework import serializers

from .models import Accounts, Products, Reviews, Likes, Images


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['id_image', 'file']


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
    images = ImageSerializer(many=True, required=False)

    class Meta:
        model = Products
        fields = [
            'id_product', 'name', 'price', 'description', 'brand', 'video_transmission',
            'powering', 'transmitter_protocol', 'propeller_size', 'frame_size', 'power_connector',
            'version', 'number_of_rating', 'overall_rating', 'images'
        ]

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        product = Products.objects.create(**validated_data)
        for image_data in images_data:
            Images.objects.create(product=product, **image_data)
        return product

    def update(self, instance, validated_data):
        images_data = validated_data.pop('images', [])
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        instance.images.all().delete()
        for image_data in images_data:
            Images.objects.create(product=instance, **image_data)

        return instance


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ['id_image', 'file']


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=50)
