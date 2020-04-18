
from cloud.models import FileModel
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
import os


class CloudView(APIView):

    def get(self, request, code, format=None):
        file_object = FileModel.objects.get(code=code)
        path = file_object.file.path

        with open(path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.")
            response['Content-Disposition'] = 'attachment; filename=' + file_object.name
            return response


class CloudCheckView(APIView):

    def get(self, request, code, format=None):
        file_object = FileModel.objects.get(code=code)

        if file_object:
            path = file_object.file.path
            return Response({"path": path}, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)
