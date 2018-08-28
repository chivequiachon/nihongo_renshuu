from django.shortcuts import render

def sample(request):
    return render(request, 'pages/hiragana_training.html')
