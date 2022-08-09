function desenharGraficos(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(criarTodosGraficos);
};


function criarTodosGraficos(){
    var graficoDistancia = new Grafico('Tempo (min)', 'Distância (metros)',
                    new google.visualization.LineChart(document.getElementById('curve_chart')),
                    [[0, 0, '0 m/s'], [20,12, '0 m/s']], distanciaOptions);
    graficoDistancia.desenharGrafico();
}

desenharGraficos()


//let dadosDistancia = implementarDistancia([2, 3, '10 m/s'])
//desenharGraficoDistancia(dadosDistancia)

//pegarDados();



