let graficoDistancia
let graficoVelocidade
let segundos = 0


function desenharGraficos(){
    google.charts.load('current', {'packages':['corechart', 'gauge']});
    google.charts.setOnLoadCallback(criarTodosGraficos);
};

function criarTodosGraficos(){
    let graficoDistanciaInstancia = new GraficoLinha('Tempo (min)', 'Distância (metros)',
                    new google.visualization.LineChart(document.getElementById('curve_chart')),
                    [], new DistanciaTempoOptions());
    graficoDistancia = graficoDistanciaInstancia
    graficoDistancia.criarGrafico();

    let graficoVelocidadeInstancia = new GraficoVelocidade([['velocidade', 50], ['velocidade', 0]],
                    new google.visualization.Gauge(document.getElementById('speed_chart')),
                    new VelocidadeMediaOptions())
    graficoVelocidade = graficoVelocidadeInstancia
    graficoVelocidade.criarGrafico()
}

desenharGraficos()

//Começa a contar o tempo de atividade
setInterval(() => {
    segundos += 1
}, 1000)


//Requisição a cada um certo periodo de tempo para atualizar os gráficos
setInterval(() => {

        fetchDados()
                .then(response => response.json())
                .then(json =>  {
                    if(graficoDistancia._valores.length == 0){
                        graficoDistancia.atualizarDados([0, 0])
                    }

                    if(graficoVelocidade._valores.length == 0){
                        graficoVelocidade.atualizarDados(0)
                    }


                     graficoDistancia.atualizarDados([(segundos / 60), Math.floor(json.distancia)])
                     graficoVelocidade.atualizarDados(json.velocidade_media)
                })
                .catch(err => console.log(err))
}, 30000)
