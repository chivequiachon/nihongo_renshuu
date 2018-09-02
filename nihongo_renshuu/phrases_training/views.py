from django.shortcuts import render

def show_jphrase_training(request):
    script = "https://script.google.com/macros/s/AKfycbwCaVvi8tNx7uZU0Xu0DMze9oJIiCR68HB-xhAH5eU7b05AhtKN/exec"
    return render(request, 'pages/phrases_training.html', {"script": script})
    
