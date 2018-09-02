from django.shortcuts import render
from nihongo_renshuu import constants


def show_katakana_training(request):
    script = constants.GA_SCRIPT + "?type=katakana"
    return render(request, 'pages/katakana_training.html', {"script": script})