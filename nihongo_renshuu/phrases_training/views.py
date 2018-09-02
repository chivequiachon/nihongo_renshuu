from django.shortcuts import render
from django.conf import settings


def show_jphrase_training(request):
    script = settings.constants.GA_SCRIPT
    return render(request, 'pages/phrases_training.html', {"script": script})
    
