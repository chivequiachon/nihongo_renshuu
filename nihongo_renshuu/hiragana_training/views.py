from django.shortcuts import render

def show_hiragana_training(request):
    return render(request, 'pages/hiragana_training.html')
