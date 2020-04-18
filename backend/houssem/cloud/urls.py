
from django.urls import path
from cloud.views import CloudView, CloudCheckView


urlpatterns = [
    path('<str:code>/', CloudView.as_view(), name="files"),
    path('check/<str:code>/', CloudCheckView.as_view(), name="files_check")
]
