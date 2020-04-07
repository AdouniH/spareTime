
from rest_framework import serializers


class Doc_mail_get_request(serializers.Serializer):
    email = serializers.EmailField(required=True, max_length=100, help_text="le mail à rajouter à la base de données")


class Doc_mail_get_response(serializers.Serializer):
    id = serializers.IntegerField(help_text="l'identifiant du mail")
    email = serializers.EmailField(max_length=100, help_text="le mail")
