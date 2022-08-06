from server import server
from flask import render_template, redirect
from service.google_service import *

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

if __name__ == '__main__':
    server.run()
