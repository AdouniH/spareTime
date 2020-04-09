
from rendezvous.models import RendezVous, RdvCalendar
from rendezvous.serializers import RendezvousSerializer, RdvCalenderSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema


class RdvView(APIView):
    authentication_classes = [TokenAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: RendezvousSerializer(many=False)})
    def get(self, request, format=None):
        """
        Liste des rendez vous prises

        ---
        """
        rdvs = RendezVous.objects.all()
        serializer = RendezvousSerializer(rdvs, many=True)
        return Response(serializer.data)


class RdvShift(APIView):
    authentication_classes = [TokenAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: RdvCalenderSerializer(many=False)})
    def get(self, request, format=None):
        """
        fetch calendar

        ---
        """
        calendar = RdvCalendar.objects.all()
        serializer = RdvCalenderSerializer(calendar, many=True)
        return Response(serializer.data)
