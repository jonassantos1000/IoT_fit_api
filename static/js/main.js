let graficoDistancia
let graficoPassos
let distanciaTotal = 0
let passosTotal = 0
let velocidadeMaxima = 0
let segundos = 0


//Começa a contar o tempo de atividade
setInterval(() => {
    segundos += 1
}, 1000)


//Requisição a cada um certo periodo de tempo para atualizar os gráficos
setInterval(() => {

    fetchDados()
        .then(response => response.json())
        .then(json => {
            atualizarTodosGraficos(json)
            atualizarVelocidadeMaxima(json.velocidade_media)
            somarPassos(json.passos)
            atualizarTotalizadores()
        })
        .catch(err => {
            mostrarAlerta("Ocorreu um erro ao atualizar os dados.")
        })
}, 30000)


desenharGraficos()