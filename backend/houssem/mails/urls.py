
from django.urls import path
from mails.views import MailView


urlpatterns = [
    path('', MailView.as_view(), name='token_key'),
]
