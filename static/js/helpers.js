function instanciarGraficos() {
    graficoDistancia = new GraficoLinha('grafico_distancia', options.DISTANCIA_TEMPO);
    graficoPassos = new GraficoLinha('grafico_passos', options.PASSOS_METRO);
}

function criarTodosGraficos(){
    instanciarGraficos();
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

function atualizarTodosGraficos(json){
    graficoDistancia.atualizarDados([(segundos / 60), Math.floor(json.distancia),
                `${json.velocidade_media} ${graficoDistancia._unidadeMedida}`,
                 `Metros: ${json.distancia}\nMinutos: ${Number((segundos/ 60).toFixed(2))}`])

    graficoPassos.atualizarDados([somarDistancia(json.distancia), json.passos,
                `${json.passos_medio} ${graficoPassos._unidadeMedida}`,
                `Passos: ${json.passos_medio}\nMetros: ${json.distancia}`])

    atualizarVelocidadeMaxima(json.velocidade_media)
    somarPassos(json.passos)
    atualizarTotalizadores()
}

function mostrarAlerta(mensagem){
     let alerta = $("#alerta")
     let alertaParagrafo = $("#alerta p")
     alertaParagrafo.text(mensagem)
     alerta.show()
     setTimeout(function() {
        alerta.fadeOut('fast')
        },  3000)
}

//Garante o que o gráfico seja responsivo
$(window).resize(function(){
  graficoDistancia.desenharGrafico()
  graficoPassos.desenharGrafico()
});