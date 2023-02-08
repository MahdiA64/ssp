from rest_framework import generics
from .models import StudySpace, Review, Booking
from .serializers import StudySpaceSerializer, ReviewSerializer, BookingSerializer

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class StudySpaceCreateView(generics.CreateAPIView):
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer

class StudySpaceListView(generics.ListAPIView):
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer

class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewListView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer