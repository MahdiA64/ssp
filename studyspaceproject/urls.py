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
    ReviewCreateView,
    ReviewListView,
    BookingCreateView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_view, name="login"),
    path('register/', registration_view, name="register"),
    path('logout/', logout_view, name="logout"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("simple_chatbot/", SimpleChatbot.as_view()),
    path('studyspaces/', StudySpaceCreateView.as_view(), name='create_studyspace'),
    path('review/', ReviewCreateView.as_view(), name='create_review'),
    path('api/reviews/', ReviewListView.as_view(), name='review_list'),
    path('api/book/', BookingCreateView.as_view(), name='create_booking'),
]

