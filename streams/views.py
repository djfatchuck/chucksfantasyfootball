from django.shortcuts import render
from bs4 import BeautifulSoup
import urllib.request
from .models import GameStream


def frame(request, frame_id):
    context = {}
    try:
        src = GameStream.objects.get(id=frame_id).source
    except GameStream.DoesNotExist:
        return render(request, 'badgame.html')
    f = urllib.request.urlopen(src)
    soup = BeautifulSoup(str(f.read(), 'cp1252'), 'html.parser')
    soup.find('div', id="html1").decompose()
    for script in soup.body.find_all("script"):
        script.decompose()
    context['soup'] = str(soup)
    return render(request, 'frame.html', context=context)