
from django.db import models
from users.models import Profile


class RendezVous(models.Model):
    data = models.CharField(max_length=300, blank=True)
    profile_booker = models.ForeignKey(Profile, on_delete=models.CASCADE)

    def __str__(self):
        return "booked by " + self.profile_booker.user.username


class RdvCalendar(models.Model):
    day = models.DateField()
    t_9h00 = models.ForeignKey(RendezVous, null=True, blank=True, on_delete=models.DO_NOTHING, related_name='a')
    t_9h30 = models.ForeignKey(RendezVous, null=True, blank=True, on_delete=models.DO_NOTHING, related_name='b')
    t_10h00 = models.ForeignKey(RendezVous, null=True, blank=True, on_delete=models.DO_NOTHING, related_name='c')
    t_10h30 = models.ForeignKey(RendezVous, null=True, blank=True, on_delete=models.DO_NOTHING, related_name='d')
    t_11h00 = models.ForeignKey(RendezVous, null=True, blank=True, on_delete=models.DO_NOTHING, related_name='e')
    t_11h30 = models.ForeignKey(RendezVous, null=True, blank=True, on_delete=models.DO_NOTHING, related_name='f')

    def __str__(self):
        return str(self.day)
