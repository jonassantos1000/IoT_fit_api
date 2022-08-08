class Aggregate:
    def __init__(self, dataTypeName):
        self._dataTypeName = dataTypeName

    @property
    def dataTypeName(self):
        return self._dataTypeName

    def dict(self):
        aggregate = {}
        for key in self.__dict__:
            aggregate[key[1:]] = self.__dict__.__getitem__(key)
        return aggregate