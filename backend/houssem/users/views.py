from drf_yasg.utils import swagger_auto_schema
from rest_framework.authtoken import views
from users.code_doc.doc_user_serializers import Doc_token_post, Doc_token_post_response


obtain_auth_token_view = swagger_auto_schema(
    method='post',
    request_body=Doc_token_post,
    operation_summary="Récuperation du token key",
    responses={200: Doc_token_post_response(many=False)}
)(views.obtain_auth_token)
