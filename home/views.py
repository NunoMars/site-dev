from django.shortcuts import render
from .models import Diplomas, Works

def index(request):
    diplomas = Diplomas.objects.all()
    works = Works.objects.all()
    args = {
        "diplomas": diplomas,
        "works": works,
        "count_diplomas": len(diplomas),
        "count_works": len(works)
    }
    return render(request, "index.html", args)

def contacts(request):
    pass