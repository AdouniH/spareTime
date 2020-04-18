from django.db import models


class FileModel(models.Model):
    code = models.CharField(max_length=30, unique=True)
    file = models.FileField()

    def __str__(self):
        return self.code
