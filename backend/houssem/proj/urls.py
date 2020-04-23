
from django.urls import path
from proj.views import ProjView


urlpatterns = [
    path('<int:epsg_from>/<int:epsg_to>/<str:x>/<str:y>/', ProjView.as_view(), name='converting'),
]
