
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status
from users import models


class TokenKey(APIView):
    """
    List all snippets, or create a new snippet.
    """

    def post(self, request, format=None):
        # serializer = SnippetSerializer(data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"test": "ok"}, status=status.HTTP_200_OK)

