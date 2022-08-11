let graficoDistancia
let graficoVelocidade
let graficoPassos
let segundos = 0


function desenharGraficos() {
    google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
    google.charts.setOnLoadCallback(criarTodosGraficos);
};

function criarTodosGraficos() {
    let graficoDistanciaInstancia = new GraficoLinha('Tempo (min)', 'Distância (metros)',
        new google.visualization.LineChart(document.getElementById('grafico_distancia')),
        [], new DistanciaTempoOptions());

    graficoDistancia = graficoDistanciaInstancia
    graficoDistancia.criarGrafico();


    let graficoPassosInstancia = new GraficoLinha('Distância (metros)', 'Passos)',
        new google.visualization.LineChart(document.getElementById('grafico_passos')),
        [], new PassosDistanciaOptions());

    graficoPassos = graficoPassosInstancia
    graficoPassos.criarGrafico();



    let graficoVelocidadeInstancia = new GraficoVelocidade(['m/s', 0],
        new google.visualization.Gauge(document.getElementById('grafico_velocidade')),
        new VelocidadeMediaOptions().VelocidadeOptions())

    graficoVelocidade = graficoVelocidadeInstancia
    graficoVelocidade.criarGrafico()
}

desenharGraficos()

//Começa a contar o tempo de atividade
setInterval(() => {
    segundos += 30
}, 1000)


//Requisição a cada um certo periodo de tempo para atualizar os gráficos
setInterval(() => {

    fetchDados()
        .then(response => response.json())
        .then(json => {

            graficoDistancia.atualizarDados([(segundos / 60), Math.floor(json.distancia)])

            graficoPassos.atualizarDados([Math.floor(json.distancia), json.passos])

            graficoVelocidade.atualizarDados(['m/s', json.velocidade_media])

        })
        .catch(err => console.log(err))
}, 5000)

//Garante o que o gráfico seja responsivo
$(window).resize(function(){
  graficoDistancia.desenharGrafico()
  graficoPassos.desenharGrafico()
  graficoVelocidade.desenharGrafico()
});
