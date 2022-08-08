class Response:
    def __init__(self, passos, distancia, velocidade_media):
        self._passos = passos
        self._distancia = distancia
        self._velocidade_media = velocidade_media

    @property
    def passos(self):
        return self._passos

    @property
    def distancia(self):
        return self._distancia

    @property
    def velocidade_media(self):
        return self._velocidade_media

    def dict(self):
        response = {}
        for key in self.__dict__:
            response[key[1:]] = self.__dict__.__getitem__(key)
        return response