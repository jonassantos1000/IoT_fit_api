import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


class GoogleService:
    def __init__(self):
        self._creds = None
        self._service = None
        self._API_SERVICE_NAME = 'fitness'
        self._API_VERSION = 'v1'
        self._SCOPES = ['https://www.googleapis.com/auth/fitness.activity.read','https://www.googleapis.com/auth/fitness.location.read']

    def autenticar(self):
        if not self.autenticacao_valida():
            self._revalidar_token()

        return self._token_eh_valido()

    # metodo publico para saber o status do token
    def autenticacao_valida(self):
        return self._token_eh_valido()

    # verifica se o token é valido e se não esta expirado
    def _revalidar_token(self):
        if self._creds and self._creds.expired and self._creds.refresh_token:
            self._renovar_token()
        else:
            self._criar_token()
        self._salvar_token()

    # Pega o token se ja existir
    def _carregar_token_existente(self):
        if os.path.exists('token.json'):
            self._creds = Credentials.from_authorized_user_file('token.json', self._SCOPES)

    # faz a renovaçao do token
    def _renovar_token(self):
        self._creds.refresh(Request())

    # abre a pagina no navegador para o usuario fazer o aceite das permissoes e pega o codigo da autorização
    def _criar_token(self):
        flow = InstalledAppFlow.from_client_secrets_file(
            './static/client_secret.json', self._SCOPES)
        self._creds = flow.run_local_server(port=5000)

    # salva o token em formato json
    def _salvar_token(self):
        with open('token.json', 'w') as token:
            token.write(self._creds.to_json())

    # retorna se o status do token, se é valido ou não
    def _token_eh_valido(self):
        self._carregar_token_existente()
        return self._creds and self._creds.valid
