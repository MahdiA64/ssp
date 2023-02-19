from .models import StudySpace, Review, Booking
from .serializers import StudySpaceSerializer, ReviewSerializer, BookingSerializer
from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class BookViewSet(mixins.CreateModelMixin,
                  mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  GenericViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)
    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)


class StudySpaceViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        GenericViewSet):
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer


class ReviewViewSet(mixins.CreateModelMixin,
                    mixins.ListModelMixin,
                    GenericViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
