import json
from time import time
from model.payload_dto import PayloadDTO
from server import server
from flask import render_template, redirect, request
from service.google_service import *
from service.data_service import DataService

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

@app.route('/data', methods=['POST'])
def data():
    jsonPayload = request.get_json()
    payload = PayloadDTO(jsonPayload['startTimeMillis'], jsonPayload['endTimeMillis'])
    result = DataService()
    response = app.response_class(
        response=json.dumps(result.find_data_by_millis(payload)),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == '__main__':
    server.run()
