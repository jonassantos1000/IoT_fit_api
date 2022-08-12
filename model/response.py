class Response:
    def __init__(self, passos, distancia, velocidade_media, passos_medio):
        self._passos = passos
        self._distancia = distancia
        self._velocidade_media = velocidade_media
        self._passos_medio = passos_medio

    @property
    def passos(self):
        return self._passos

    @property
    def distancia(self):
        return self._distancia

    @property
    def velocidade_media(self):
        return self._velocidade_media

    @property
    def passos_medio(self):
        return self._passos_medio

    def dict(self):
        response = {}
        for key in self.__dict__:
            response[key[1:]] = self.__dict__.__getitem__(key)
        return response