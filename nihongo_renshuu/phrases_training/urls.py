from django.conf.urls import url 
from . import views

urlpatterns = [ 
    url(r'^$', views.show_jphrase_training, name='jphrase_training'),
]
