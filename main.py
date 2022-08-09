import json
from model.payload_dto import PayloadDTO
from server import server
from flask import render_template, redirect, request
from service.google_service import *
from service.dados_service import DadosService


app = server.app
service = GoogleService()


@app.route('/')
def home():
    if service.autenticacao_valida():
        return render_template('index.html')
    return redirect('/auth')

@app.route('/auth')
def auth():
    if service.autenticar():
        return redirect('/')
    return redirect('/auth')

@app.route('/dados', methods=['POST'])
def data():
    jsonPayload = request.get_json()
    payload = PayloadDTO(jsonPayload['startTimeMillis'], jsonPayload['endTimeMillis'])
    result = DadosService()
    response = app.response_class(
        response=json.dumps(result.buscar_dados_por_milissegundos(payload)),
        status=200,
        mimetype='application/json',

    )
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == '__main__':
    server.run()
