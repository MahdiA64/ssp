from django.urls import path
from rest_framework import routers

from studyspaceapp.views import (
    BookViewSet,
    StudySpaceViewSet,
    ReviewViewSet,
)

router = routers.DefaultRouter()
router.register('studyspaces', StudySpaceViewSet)
router.register('reviews', ReviewViewSet)
router.register('books', BookViewSet)

urlpatterns = [

] + router.urls
