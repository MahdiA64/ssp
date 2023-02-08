"""studyspaceproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from simple_chatbot.views import SimpleChatbot

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from account.views import(
    registration_view,
    login_view,
    logout_view,
)

from studyspaceapp.views import (
    StudySpaceCreateView,
    StudySpaceListView,
    ReviewCreateView,
    ReviewListView,
    BookingCreateView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_view, name="login"),
    path('register/', registration_view, name="register"),
    path('logout', logout_view, name="logout"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("simple_chatbot/", SimpleChatbot.as_view()),
    path('studyspaces/', StudySpaceCreateView.as_view(), name='create_studyspace'),
    path('api/studyspaces/', StudySpaceListView.as_view(), name='study_space_list'),
    path('review/', ReviewCreateView.as_view(), name='create_review'),
    path('api/reviews/', ReviewListView.as_view(), name='review_list'),
    path('api/book/', BookingCreateView.as_view(), name='create_booking'),
]

