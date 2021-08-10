from django.shortcuts import render
from .models import Diplomas, Works

def index(request):
    diplomas = Diplomas.objects.all()
    args = {
        "diplomas": diplomas,
    }
    return render(request, "index.html", args)

def contacts(request):
    pass