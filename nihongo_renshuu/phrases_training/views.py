from django.shortcuts import render
import requests

def sample(request):
    script = "https://script.google.com/macros/s/AKfycbwCaVvi8tNx7uZU0Xu0DMze9oJIiCR68HB-xhAH5eU7b05AhtKN/exec"
    #r = requests.get("https://script.google.com/macros/s/AKfycbwCaVvi8tNx7uZU0Xu0DMze9oJIiCR68HB-xhAH5eU7b05AhtKN/exec")
    #question_answer = r.json()
    return render(request, 'pages/phrases_training.html', {"script": script})
    
