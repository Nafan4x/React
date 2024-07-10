from django.shortcuts import render
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .models import Accounts, Products, Reviews, Likes, Images
from .serializers import AccountSerializer, ProductsSerializer, ReviewsSerializer, LikesSerializer, LoginSerializer, \
    ImageSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password


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


class ImagesApi(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id_product', 'file']


class LoginAPIView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            try:
                account = Accounts.objects.get(email=email)
                if password == account.password:
                    return Response({"message": "Login successful",
                                     "id_accounts": account.id_accounts},
                                    status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Invalid password"}, status=status.HTTP_401_UNAUTHORIZED)
            except Accounts.DoesNotExist:
                return Response({"error": "Account not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
