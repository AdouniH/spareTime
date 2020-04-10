
from rest_framework import serializers


class Doc_token_post(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=100, help_text="le nom d'utilisateur")
    password = serializers.CharField(required=True, max_length=100, help_text="le mot de passe")


class Doc_token_post_response(serializers.Serializer):
    token = serializers.CharField(required=True, max_length=100, help_text="le token")


class Doc_code_request(serializers.Serializer):
    code = serializers.CharField(required=True, max_length=100, help_text="le code du profile")


class Doc_profil_post(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=100, help_text="le nom d'utilisateur")
    password = serializers.CharField(required=True, max_length=100, help_text="le mot de passe")
    code = serializers.CharField(required=True, max_length=100, help_text="le code")


class Doc_check_user_response(serializers.Serializer):
    user_exists = serializers.BooleanField(required=True, help_text="True si l'utilisateur existe",)
