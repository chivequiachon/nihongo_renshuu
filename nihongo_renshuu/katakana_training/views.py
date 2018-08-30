from django.shortcuts import render

def sample(request):
    return render(request, 'pages/katakana_training.html')
