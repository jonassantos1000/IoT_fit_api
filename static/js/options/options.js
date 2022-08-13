class Option {
    atribuirVmax(novoVmax) {
        this.option.vAxis.viewWindow.max = novoVmax + 20
    }

    retornarOption(vMaxAtual) {
        vMaxAtual > this.option.vAxis.viewWindow.max ? this.atribuirVmax(vMaxAtual) : ''
        return this.option
    }

    gerarOption(tituloPrincipal, tituloHA, tituloVA, formatHA, unidadeMedida, formatVA){
        this.option = {
            title: tituloPrincipal,
            legend: "none",
            hAxis: {
                title: tituloHA,
                baselineColor: "#8f9bb3",
                gridlineColor: "#8f9bb3",
                titleTextStyle: {
                    "color": "white"
                },
                textStyle: {
                    "color": "#8f9bb3"
                },
                format: formatHA,

            },
            vAxis: {
                title: tituloVA,
                baselineColor: "#8f9bb3",
                gridlineColor: "#8f9bb3",
                titleTextStyle: {
                    color: "white"
                },
                textStyle: {
                    color: "#8f9bb3"
                },
                format: formatVA,
                viewWindowMode: 'explicit',
                viewWindow: {
                    max: 0,
                    min: 0
                }
            },

            height: 300,
            titleTextStyle: {
                color: "white"
            },
            backgroundColor: "#222b45",
            colors: [
                "rgb(0, 214, 143)"
            ],
            fontName: "Sora",
            pointSize: 5,
            medida: unidadeMedida
            }
        return this
    }
}

const options = Object.freeze({
    DISTANCIA_TEMPO: new Option().gerarOption("Distância percorrida x tempo", "Tempo (min)", "Distância (metros)", '#.# min', 'm/s','### m'),
    PASSOS_METRO: new Option().gerarOption("Passos", "Distância (metros)", "Passos",'### m', 'm/p')
})
