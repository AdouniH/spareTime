import pyproj  # Import the pyproj module


def convert(epsg_from, epsg_to, x, y):
    """
    Convertir !

    :param epsg_from: epsg en entrée
    :type epsg_from: int

    :param epsg_to: epsg en sortie
    :type epsg_to: int

    :param x: coordonnées en entrée
    :type x: float

    :param y: coordonnées en entrée
    :type y: float

    :return: coordonnées en entrée (eg: (270131.95851089834, 7103599.086470567) )
    :rtype: tuple[str]
    """

    proj_from = pyproj.CRS("EPSG:{}".format(epsg_from))
    proj_to = pyproj.CRS("EPSG:{}".format(epsg_to))
    return pyproj.transform(proj_from, proj_to, float(x), float(y))


if __name__ == "__main__":
    print(convert(4326, 4223, 63.983, -19.700))
