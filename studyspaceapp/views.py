from rest_framework import generics
from .models import StudySpace, Review, Booking
from .serializers import StudySpaceSerializer, ReviewSerializer, BookingSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class BookingCreateView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        # Get the current user
        user = request.user

        # Create a new booking with the user as the foreign key
        booking = Booking.objects.create(
            start_time=request.data['start_time'],
            end_time=request.data['end_time'],
            group_space=request.data.get('group_space', False),
            pc_required=request.data.get('pc_required', False),
            powered_seating=request.data.get('powered_seating', False),
            user=user
        )

        serializer = BookingSerializer(booking)
        return Response(serializer.data)

class StudySpaceCreateView(generics.CreateAPIView):
    queryset = StudySpace.objects.all()
    serializer_class = StudySpaceSerializer

class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewListView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer