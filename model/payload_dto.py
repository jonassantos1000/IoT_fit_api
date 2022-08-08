class PayloadDTO:
    def __init__(self, startTimeMillis, endTimeMillis):
        self._startTimeMillis = startTimeMillis
        self._endTimeMillis = endTimeMillis

    @property
    def startTimeMillis(self):
        return self._startTimeMillis

    @property
    def endTimeMillis(self):
        return self._endTimeMillis