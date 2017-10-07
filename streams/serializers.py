from rest_framework import serializers
from .models import GameStream


class GameStreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameStream
        exclude = ('source',)
