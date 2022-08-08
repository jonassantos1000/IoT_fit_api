class bucketByTime:
    def __init__(self, durationMillis):
        self._durationMillis = durationMillis

    @property
    def durationMillis(self):
        return self._durationMillis

    def dict(self):
        bucketByTime = {}
        for key in self.__dict__:
            bucketByTime[key[1:]] = self.__dict__.__getitem__(key)
        return bucketByTime