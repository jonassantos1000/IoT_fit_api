let graficoDistancia
let graficoPassos
let distanciaTotal = 0
let segundos = 0
let testando={}


function criarTodosGraficos() {
    graficoDistancia = new GraficoLinha('Tempo (min)', 'Distância (metros)',
        new google.visualization.LineChart(document.getElementById('grafico_distancia')),
        [], new DistanciaTempoOptions(), 'm/s');

    graficoPassos = new GraficoLinha('Distância (metros)', 'Passos)',
        new google.visualization.LineChart(document.getElementById('grafico_passos')),
        [], new PassosDistanciaOptions(), 'p/d');

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
        })
        .catch(err => console.log(err))
}, 30000)

//Garante o que o gráfico seja responsivo
$(window).resize(function(){
  graficoDistancia.desenharGrafico()
  graficoPassos.desenharGrafico()
});

desenharGraficos()