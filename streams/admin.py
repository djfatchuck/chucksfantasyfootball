from django.contrib import admin
from .models import GameStream


@admin.register(GameStream)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'source'
    )