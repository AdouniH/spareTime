
from rest_framework import serializers
from rendezvous.models import RendezVous, RdvCalendar


class RendezvousSerializer(serializers.ModelSerializer):
    class Meta:
        model = RendezVous
        fields = '__all__'


class RdvCalenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = RdvCalendar
        fields = '__all__'
