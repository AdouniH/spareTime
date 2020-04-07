from drf_yasg.utils import swagger_auto_schema
from rest_framework.authtoken import views
from users.code_doc.doc_user_serializers \
    import \
    Doc_token_post, \
    Doc_token_post_response, \
    Doc_code_request, \
    Doc_profil_post
from users.models import Profile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import ProfileSerializer, UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication, BasicAuthentication


obtain_auth_token_view = swagger_auto_schema(
    method='post',
    request_body=Doc_token_post,
    operation_summary="Récuperation du token key",
    responses={200: Doc_token_post_response(many=False)}
)(views.obtain_auth_token)


class ProfileView(APIView):
    authentication_classes = [TokenAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: ProfileSerializer(many=True)})
    def get(self, request, format=None):
        """
        Get all profiles

        ---
        """
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(request_body=Doc_profil_post, responses={200: ProfileSerializer(many=False)})
    def post(self, request, format=None):
        """
        Create new profile

        ---
        """
        serializer_user = UserSerializer(data=request.data)

        if serializer_user.is_valid():
            user = serializer_user.save()

            profile = Profile(user=user, code=request.data["code"])
            profile.save()
            serializer_profile = ProfileSerializer(profile)

            return Response(serializer_profile.data, status=status.HTTP_201_CREATED)
        return Response(serializer_user.errors, status=status.HTTP_400_BAD_REQUEST)


class PtokenView(APIView):
    @swagger_auto_schema(request_body=Doc_code_request, responses={200: Doc_token_post_response(many=False)})
    def post(self, request, format=None):
        """
        Récuperation du token key à partir du code du profil

        ---
        """
        code = request.data["code"]
        objects = Profile.objects.filter(code=code)
        if not objects:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        profile_object = objects[0]
        user = profile_object.user
        a, b = Token.objects.get_or_create(user=user)
        return Response({'token': a.key}, status=status.HTTP_200_OK)
