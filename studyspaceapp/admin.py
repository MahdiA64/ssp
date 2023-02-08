from django.contrib import admin

# Register your models here.

from studyspaceapp.models import StudySpace, Review, Booking

admin.site.register(StudySpace)
admin.site.register(Review)
admin.site.register(Booking)
