from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from streams.models import GameStream
from streams.serializers import GameStreamSerializer
import json


@login_required()
def index(request):
    context = {}
    streams = GameStream.objects.all()
    serializer = GameStreamSerializer(streams, many=True)
    context['streams'] = json.dumps(serializer.data)
    return render(request, 'index.html', context={'props': context})
