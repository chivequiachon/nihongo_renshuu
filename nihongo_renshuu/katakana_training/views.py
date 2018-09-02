from django.shortcuts import render

def show_katakana_training(request):
    return render(request, 'pages/katakana_training.html')
