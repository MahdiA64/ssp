from django.contrib import admin
from django.urls import path, include
from simple_chatbot.views import SimpleChatbot

from account.views import(
    registration_view,
    login_view,
    logout_view,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', login_view, name="login"),
    path('register/', registration_view, name="register"),
    path('logout/', logout_view, name="logout"),
    path("simple_chatbot/", SimpleChatbot.as_view()),
]

