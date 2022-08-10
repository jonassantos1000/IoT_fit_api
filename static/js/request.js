let inicioAtividade = +new Date();

function criarTempoAtividade(atualAtividade){

    tempoAtividade = {
        startTimeMillis: inicioAtividade,
        endTimeMillis: atualAtividade
    }

    inicioAtividade = atualAtividade

    return tempoAtividade

}

function fetchDados(){

          const body = criarTempoAtividade(+new Date())

          const dados = fetch('http://localhost:8080/dados', {
          method: "POST",
          body: JSON.stringify(body),
          headers: {"Content-type": "application/json; charset=UTF-8"}
                })

          return dados
}

