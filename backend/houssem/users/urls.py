
from django.urls import path
from users.views import obtain_auth_token_view
from users.views import ProfileView, PtokenView


urlpatterns = [
    path('token/', obtain_auth_token_view, name='token_key'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('ptoken/', PtokenView.as_view(), name='ptoken_key')
]
