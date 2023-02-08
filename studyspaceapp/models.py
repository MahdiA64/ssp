from django.db import models
from account.models import Account
# Create your models here.

class Booking(models.Model):
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    group_space = models.BooleanField(default=False)
    pc_required = models.BooleanField(default=False)
    powered_seating = models.BooleanField(default=False)
    user = models.ForeignKey(Account, on_delete=models.CASCADE, default=None)

class StudySpace(models.Model):
    name = models.CharField(max_length=255)
    capacity = models.PositiveIntegerField()
    floor = models.PositiveIntegerField(default=1)
    group_space = models.BooleanField(default=False)
    pc_available = models.BooleanField(default=False)
    powered_seating = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'capacity': self.capacity,
            'pc_available': self.pc_available,
            'powered_seating': self.powered_seating,
        }

class Review(models.Model):
    study_space = models.CharField(max_length=255)
    rating = models.PositiveIntegerField()
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.study_space

    def to_dict(self):
        return {
            'id': self.id,
            'study_space': self.study_space,
            'rating': self.rating,
            'description': self.description,
        }