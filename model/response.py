class Response:
    def __init__(self, passos, distancia):
        self._passos = passos
        self._distancia = distancia

    @property
    def passos(self):
        return self._passos

    @property
    def distancia(self):
        return self._distancia

    def dict(self):
        response = {}
        for key in self.__dict__:
            response[key[1:]] = self.__dict__.__getitem__(key)
        return response