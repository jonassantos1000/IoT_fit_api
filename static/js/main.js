let graficoDistancia
let segundos = 0


function desenharGraficos(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(criarTodosGraficos);
};

function criarTodosGraficos(){
    let graficoDistanciaInstancia = new GraficoLinha('Tempo (min)', 'Distância (metros)',
                    new google.visualization.LineChart(document.getElementById('curve_chart')),
                    [], new Options());
    graficoDistancia = graficoDistanciaInstancia
    graficoDistancia.criarGrafico();
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

                     graficoDistancia.atualizarDados([(segundos / 60), Math.floor(json.distancia)])
                })
                .catch(err => console.log(err))
}, 30000)
