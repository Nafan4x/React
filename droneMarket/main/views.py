from django.shortcuts import render
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .models import Accounts, Products, Reviews, Likes
from .serializers import AccountSerializer, ProductsSerializer, ReviewsSerializer, LikesSerializer


def index(request):
    return render(request, 'main/index.html')


class AccountsApi(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_accounts', 'email', 'password']


class ProductsApi(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_product', 'name', 'price', 'description', 'brand', 'video_transmission', 'powering',
                        'transmitter_protocol', 'propeller_size', 'frame_size', 'power_connector', 'version',
                        'number_of_rating', 'overall_rating']


class ReviewsApi(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_review', 'id_accounts', 'id_product', 'rating', 'comment']


class LikesApi(viewsets.ModelViewSet):
    queryset = Likes.objects.all()
    serializer_class = LikesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_review', 'id_accounts', 'id_product']
