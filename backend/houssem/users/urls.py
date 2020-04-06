
from django.urls import path
from users.views import obtain_auth_token_view


urlpatterns = [
    path('token/', obtain_auth_token_view, name='token_key'),
]
