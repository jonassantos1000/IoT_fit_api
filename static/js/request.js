async function resposta() {

    const body = criarTempoAtividade()

    let getDados = await fetch('http://localhost:8080/dados', {
     method: "POST",
    body: JSON.stringify(body),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json =>  json)
    .catch(err => console.log(err))


    return getDados
    };

function pegarDados() {
    let distancia
    let dadosJson =  resposta()
    return dadosJson
}

let inicioAtividade = +new Date();

function criarTempoAtividade(atualAtividade){

    tempo = {
        startTimeMillis: inicioAtividade,
        endTimeMillis: atualAtividade
    }

    inicioAtividade = atualAtividade

    return tempo

}

