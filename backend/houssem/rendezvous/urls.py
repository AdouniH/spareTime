
from django.urls import path
from rendezvous.views import RdvView, RdvShift

urlpatterns = [
    path('', RdvView.as_view(), name="rendezvous"),
    path('shifts/', RdvShift.as_view(), name="shifts"),
]
