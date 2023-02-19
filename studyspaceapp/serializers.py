from rest_framework import serializers
from .models import StudySpace, Review, Booking

class BookingSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Booking
        fields = '__all__'

    # def create(self, validated_data):
    #     request = self.context.get('request')
    #     user = request.user
    #     booking = Booking.objects.create(user=user, **validated_data)
    #     return booking

class StudySpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudySpace
        fields = ('id', 'name', 'capacity', 'floor', 'group_space', 'pc_available', 'powered_seating')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'study_space', 'rating', 'description')
