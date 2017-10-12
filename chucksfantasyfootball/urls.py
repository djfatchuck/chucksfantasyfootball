"""
chucksfantasyfootball URL Configuration
"""
from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^streams/', include([
        url(r'', include('streams.urls', namespace='streams')),
    ])),
    url(r'^$', views.index, name='index'),
]
