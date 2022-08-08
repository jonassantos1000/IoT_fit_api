from model.aggregate import Aggregate
from model.bucket_by_time import bucketByTime


class PayLoad():
    def __init__(self, aggregateBy=None, bucketByTime= None, startTimeMillis= None, endTimeMillis=None):
        self._aggregateBy= aggregateBy
        self._bucketByTime = bucketByTime
        self._startTimeMillis = startTimeMillis
        self._endTimeMillis = endTimeMillis

    @property
    def aggregateBy(self):
        return self._aggregateBy

    @property
    def bucketByTime(self):
        return self._bucketByTime

    @property
    def startTimeMillis(self):
        return self._startTimeMillis

    @property
    def endTimeMillis(self):
        return self._endTimeMillis

    def dict(self):
        payload = {}
        for key in self.__dict__:
            payload[key[1:]] = self.__dict__.__getitem__(key)
        return payload