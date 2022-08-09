let graficoDistancia
let tempoInicial = 0
let distanciaInicial = 0
var segundos = 0


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


//setInterval(()=> {
//    distanciaInicial += 10
//    tempoInicial += 60
//    graficoDistancia.atualizarDados([Math.floor(tempoInicial / 60), distanciaInicial])
//}, 1000)

setInterval(() => {
    segundos += 1
}, 1000)

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
                     distanciaInicial += json.distancia
                     console.log(segundos/60)
                     graficoDistancia.atualizarDados([segundos / 60, Math.floor(json.distancia)])

                })
                .catch(err => console.log(err))
}, 31000)
