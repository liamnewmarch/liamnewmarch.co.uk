from django.http import HttpResponse
from django.shortcuts import render


def home_view(request):
    return render(request, 'index.html')


def about_view(request):
    return render(request, 'about.html')


def contact_view(request):
    return render(request, 'contact.html')


def post_view(request, post_slug):
    return render(request, 'post.html')
