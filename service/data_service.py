import requests
from model.payload_dto import PayloadDTO
from model.payload import PayLoad
from model.aggregate import Aggregate
from model.bucket_by_time import bucketByTime
import json
from model.response import Response


class DataService:
    def __init__(self):
        self._URL = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate'

    def find_data_by_millis(self, payload_dto):
        url, headers, playload = self._popular_requisicao(payload_dto)
        response  = requests.post(url, headers=headers, data=json.dumps(playload))
        response = Response(response.json()['bucket'][0]['dataset'][0]['point'][0]['value'][0]['intVal'],
                            response.json()['bucket'][0]['dataset'][1]['point'][0]['value'][0]['fpVal']).dict()
        return response

    def _popular_requisicao(self, payload_dto: PayloadDTO):
        list_aggregate = []
        list_aggregate.append(Aggregate("com.google.step_count.delta").dict())
        list_aggregate.append(Aggregate("com.google.distance.delta").dict())
        token = self._carregar_token()
        url = self._URL
        headers = self._gerar_headers(token)
        return url, headers, PayLoad(list_aggregate, bucketByTime(86400000).dict(), payload_dto.startTimeMillis, payload_dto.endTimeMillis).dict()

    def _carregar_token(self):
        data = ''
        with open('./token.json') as file:
            jsonToken = json.load(file)
        return jsonToken['token']

    def _gerar_headers(self, token):
        return {
            'Authorization': f'Bearer {token}'
        }