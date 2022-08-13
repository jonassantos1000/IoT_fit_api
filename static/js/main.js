let graficoDistancia
let graficoPassos
let distanciaTotal = 0
let passosTotal = 0
let velocidadeMaxima = 0
let segundos = 0


function criarTodosGraficos() {
    graficoDistancia = new GraficoLinha('grafico_distancia', options.DISTANCIA_TEMPO);
    graficoPassos = new GraficoLinha('grafico_passos', options.PASSOS_METRO);

    graficoPassos.criarGrafico();
    graficoDistancia.criarGrafico();
}

function desenharGraficos() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(criarTodosGraficos);
};

function somarDistancia(distancia){
    distanciaTotal += distancia
    return distanciaTotal
}

function somarPassos(passos){
    passosTotal += passos
    return passosTotal
}

function atualizarTotalizadores() {
    $("#total_passos").text(passosTotal)
    $("#distancia_total").text(Math.floor(distanciaTotal))
    $("#velocidade_maxima").text(velocidadeMaxima)
}

function atualizarVelocidadeMaxima(velocidade){
    if(velocidadeMaxima <= velocidade){
        velocidadeMaxima = velocidade
    }
    return velocidadeMaxima
}

//Começa a contar o tempo de atividade
setInterval(() => {
    segundos += 1
}, 1000)


//Requisição a cada um certo periodo de tempo para atualizar os gráficos
setInterval(() => {

    fetchDados()
        .then(response => response.json())
        .then(json => {
            graficoDistancia.atualizarDados([(segundos / 60), Math.floor(json.distancia), `${json.velocidade_media} ${graficoDistancia._unidadeMedida}`])
            graficoPassos.atualizarDados([somarDistancia(json.distancia), json.passos, `${json.passos_medio} ${graficoPassos._unidadeMedida}`])

            atualizarVelocidadeMaxima(json.velocidade_media)
            somarPassos(json.passos)
            atualizarTotalizadores()
        })
        .catch(err => console.log(err))
}, 30000)

//Garante o que o gráfico seja responsivo
$(window).resize(function(){
  graficoDistancia.desenharGrafico()
  graficoPassos.desenharGrafico()
});

desenharGraficos()