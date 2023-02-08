from rest_framework import serializers
from .models import StudySpace, Review, Booking

class StudySpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudySpace
        fields = ('id', 'name', 'capacity', 'floor', 'group_space', 'pc_available', 'powered_seating')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'study_space', 'rating', 'description')

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('id', 'start_time', 'end_time', 'group_space', 'pc_required', 'powered_seating')
