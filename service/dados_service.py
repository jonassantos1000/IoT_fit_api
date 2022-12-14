import requests
import json
from model.payload_dto import PayloadDTO
from model.payload import PayLoad
from model.aggregate import Aggregate
from model.bucket_by_time import bucketByTime
from model.response import Response


class DadosService:
    def __init__(self):
        self._URL = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate'

    def buscar_dados_por_milissegundos(self, payload_dto):
        url, headers, playload = self._popular_requisicao(payload_dto)
        response = self._gerar_resposta(requests.post(url, headers=headers, data=json.dumps(playload)))
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
        with open('./token.json') as file:
            jsonToken = json.load(file)
        return jsonToken['token']

    def _gerar_headers(self, token):
        return {
            'Authorization': f'Bearer {token}'
        }

    def _gerar_resposta(self, response):
        result = response.json()

        if result.get('bucket', 0) != 0 and len(result['bucket'][0]['dataset'][0]['point']) != 0:
            qtde_passos = result['bucket'][0]['dataset'][0]['point'][0]['value'][0]['intVal']
            qtde_metros = result['bucket'][0]['dataset'][1]['point'][0]['value'][0]['fpVal']

            velocidade_media = self._calcular_velocidade_media(qtde_metros, 30)
            passos_medio = self._calcular_passos_medio(passos=qtde_passos, distancia=qtde_metros)
            response = Response(qtde_passos, qtde_metros, velocidade_media, passos_medio).dict()
            return response
        return dict(passos=0, distancia=0, velocidade_media=0, passos_medio=0)

    def _calcular_velocidade_media(self, distancia, tempo):
        return round(distancia / tempo, 3)

    def _calcular_passos_medio(self, passos, distancia):
        return round(distancia / passos, 3)