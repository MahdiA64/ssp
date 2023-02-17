from django.shortcuts import render, redirect
from django.http import HttpResponseBadRequest
from django.contrib.auth import login, authenticate, logout
from account.forms import RegistrationForm, AccountAuthenticationForm
from django.views.decorators.csrf import csrf_exempt
import jwt
from datetime import datetime, timedelta
from django.conf import settings

# def registration_view(request):
#     context = {}
#     if request.POST:
#         form = RegistrationForm(request.POST, request.FILES)
#         if form.is_valid():
#             form.save()
#             email = form.cleaned_data.get('email')
#             raw_password = form.cleaned_data.get('password1')
#             account = authenticate(email= email, password=raw_password)
#             login(request, account)
#             # return redirect('http://localhost:5173/')
#         else:
#             context['registration_form'] = form
#     else:
#         form = RegistrationForm()
#         context['registration_form'] = form
#     return render(request, 'account/register.html', context)

@csrf_exempt
def registration_view(request):
    context = {}
    if request.method == 'POST':
        form = RegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            account = authenticate(email=email, password=raw_password)
            if account:
                login(request, account)
                response = redirect('http://localhost:5173/')
                response.set_cookie('jwt_access_token', account.access_token, httponly=True)
                return response
        else:
            context['registration_form'] = form
    else:
        form = RegistrationForm()
        context['registration_form'] = form
    return render(request, 'account/register.html', context)

# def login_view(request):

#     context = {}

#     if request.POST:
#         form = AccountAuthenticationForm(request.POST)
#         if form.is_valid():
#             email = request.POST['email']
#             password = request.POST['password']
#             user = authenticate(email = email, password = password)

#             if user:
#                 login(request, user)
#                 response = HttpResponseRedirect('http://localhost:5173/')
#                 return response
            
#     else:
#         form = AccountAuthenticationForm()

#     context['login_form'] = form
#     return render(request, 'account/login.html', context)

@csrf_exempt
def login_view(request):
    context = {}
    if request.method == 'POST':
        form = AccountAuthenticationForm(request.POST)
        if form.is_valid():
            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(email=email, password=password)
            if user:
                login(request, user)

                payload = {
                    'user_id': user.id,
                    'exp': datetime.utcnow() + timedelta(days=1),
                }
                token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')

                url = f'http://localhost:5173/?token={token}'
                return redirect(url)
    else:
        form = AccountAuthenticationForm()
    context['login_form'] = form
    return render(request, 'account/login.html', context)

@csrf_exempt
def logout_view(request):
    if request.method == 'POST' and request.META.get('HTTP_X_CSRFTOKEN'):
        logout(request)
        return redirect('http://localhost:8000/')
    else:
        return HttpResponseBadRequest('CSRF token missing or incorrect')
