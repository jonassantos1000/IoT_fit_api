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

            distanciaInicial += json.distancia
            tempoInicial += 45
            graficoDistancia.atualizarDados([Math.floor(tempoInicial / 60), distanciaInicial])

        })
        .catch(err => console.log(err))

    }, 10000)






