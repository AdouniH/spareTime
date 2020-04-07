
from mails.models import Mail
from mails.serializers import MailSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from mails.code_doc.doc_mail_serializers import Doc_mail_get_request, Doc_mail_get_response


class MailView(APIView):

    @swagger_auto_schema(responses={200: Doc_mail_get_response(many=False)})
    def get(self, request, format=None):
        """
        Récupérer les mails

        ---
        """

        mails = Mail.objects.all()
        serializer = MailSerializer(mails, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(request_body=Doc_mail_get_request, responses={200: Doc_mail_get_response(many=False)})
    def post(self, request, format=None):
        """
        Créer un nouveau mail

        ---
        Si le mail existe déja alors le rajout ne sera pas permis
        """

        serializer = MailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
