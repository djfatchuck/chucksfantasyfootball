from django.db import models


class GameStream(models.Model):
    name = models.TextField(help_text="The stream name (example: New England at Miami)")
    source = models.URLField(help_text="The stream URL")
