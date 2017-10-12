"""
chucksfantasyfootball URL Configuration
"""
from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, {'template_name': 'registration/goodbye.html'}, name='logout'),
    url(r'^admin/', admin.site.urls),
    url(r'^streams/', include([
        url(r'', include('streams.urls', namespace='streams')),
    ])),
    url(r'^$', views.index, name='index'),
]
