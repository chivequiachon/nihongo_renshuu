from django.conf.urls import url 
from . import views

urlpatterns = [ 
    url(r'^$', views.show_katakana_training, name='katakana_training'),
]
