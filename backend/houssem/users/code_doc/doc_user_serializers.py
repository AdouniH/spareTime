
from rest_framework import serializers


class Doc_token_post(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=100, help_text="le nom d'utilisateur")
    password = serializers.CharField(required=True, max_length=100, help_text="le mot de passe")


class Doc_token_post_response(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=100, help_text="le token")
