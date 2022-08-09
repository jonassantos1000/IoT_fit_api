let graficoDistancia
let tempoInicial = 0
let distanciaInicial = 0


function desenharGraficos(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(criarTodosGraficos);
};

function criarTodosGraficos(){
    var graficoDistanciaInstancia = new Grafico('Tempo (min)', 'Distância (metros)',
                    new google.visualization.LineChart(document.getElementById('curve_chart')),
                    [], distanciaOptions);
    graficoDistancia = graficoDistanciaInstancia
    graficoDistancia.criarGrafico();
}
desenharGraficos()

setInterval(() => {

        const body = criarTempoAtividade(+new Date())

        fetch('http://localhost:8080/dados', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json =>  {
            if(graficoDistancia._valores.length == 0){
                graficoDistancia.atualizarDados([0, 0])
            }
             tempoInicial += 60
             distanciaInicial += json.distancia
             graficoDistancia.atualizarDados([tempoInicial / 60, Math.floor(json.distancia)])

        })
        .catch(err => console.log(err))

    }, 30000)






