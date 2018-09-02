from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.show_hiragana_training, name='hiragana_training'),
]
