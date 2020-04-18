from rest_framework import serializers
from cloud.models import FileModel


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileModel
        fields = '__all__'
