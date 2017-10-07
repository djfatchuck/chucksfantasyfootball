"""
chucksfantasyfootball streams URL Configuration
"""
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^(?P<frame_id>\d+)/$', views.frame, name='frame'),
]
