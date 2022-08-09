function resposta() {

    const body = criarTempoAtividade()

    return jQuery.ajax ({
    url: 'http://localhost:8080/dados',
    type: "POST",
    dataType: "json",
    data: JSON.stringify(body),
    contentType: "application/json; charset=utf-8",
    complete: function(data) {
        var response = JSON.stringify(data);
        return response
    }
    })};

async function pegarDados() {

    let promise = resposta()

    let dados = await promise.then(resp => resp)

    console.log(dados)

    desenharGraficoDistancia();

}

function criarTempoAtividade(){

    tempo = {
        startTimeMillis: 1659970800000,
        endTimeMillis: 1659987809875
    }

    return tempo

}

