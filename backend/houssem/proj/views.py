
from rest_framework.views import APIView
from rest_framework.response import Response
from proj.business import convert


class ProjView(APIView):

    def get(self, request, epsg_from, epsg_to, x, y, format=None):
        xs, ys = convert(epsg_from, epsg_to, x, y)
        context = {"x": xs, "y": ys}
        return Response(context)
