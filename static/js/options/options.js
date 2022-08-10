class DistanciaTempoOptions{

    constructor(){
        this.vMax = 0
    }

    atribuirVmax(novoVmax) {
          this.vMax = novoVmax + 20
          return this.vMax
    }

    retornarOptions (vMaxAtual) {
       return {
       title: "Distância percorrida x tempo",
        legend: "none",
        hAxis: {
            title: "Tempo (min)",
            baselineColor: "#8f9bb3",
            gridlineColor: "#8f9bb3",
            titleTextStyle: {
                "color": "white"
            },
            textStyle: {
                "color": "#8f9bb3"
            },
            format: '#.# min',

        },
        vAxis: {
            title: "Distância (metros)",
            baselineColor: "#8f9bb3",
            gridlineColor: "#8f9bb3",
            titleTextStyle: {
                color: "white"
            },
            textStyle: {
                color: "#8f9bb3"
            },
            format: '### m',
            viewWindowMode:'explicit',
            viewWindow:{
                    max: vMaxAtual > this.vMax ? this.atribuirVmax(vMaxAtual) : this.vMax,
                    min:0
                  }
        },
        width: '100%',
        height: 300,

        titleTextStyle: {
            color: "white"
        },
        backgroundColor: "#222b45",
        colors: [
            "rgb(0, 214, 143)"
        ],
        fontName: "Sora",
        pointSize: 5
        }
    }
}

class PassosDistanciaOptions{

    constructor(){
        this.vMax = 0
    }

    atribuirVmax(novoVmax) {
          this.vMax = novoVmax + 20
          return this.vMax
    }

    retornarOptions (vMaxAtual) {
       return {
       title: "Passos",
        legend: "none",
        hAxis: {
            title: "Distância (metros)",
            baselineColor: "#8f9bb3",
            gridlineColor: "#8f9bb3",
            titleTextStyle: {
                "color": "white"
            },
            textStyle: {
                "color": "#8f9bb3"
            },
            format: '### m',

        },
        vAxis: {
            title: "Passos",
            baselineColor: "#8f9bb3",
            gridlineColor: "#8f9bb3",
            titleTextStyle: {
                color: "white"
            },
            textStyle: {
                color: "#8f9bb3"
            },
            viewWindowMode:'explicit',
            viewWindow:{
                    max: vMaxAtual > this.vMax ? this.atribuirVmax(vMaxAtual) : this.vMax,
                    min:0
                  }
        },
        width: '100%',
        height: 300,
        titleTextStyle: {
            color: "white"
        },
        backgroundColor: "#222b45",
        colors: [
            "rgb(0, 214, 143)"
        ],
        fontName: "Sora",
        pointSize: 5
        }
    }
}

class VelocidadeMediaOptions{
    VelocidadeOptions() {

    return options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5,
          animation: {
          	duration: 1000,
          	easing: 'linear'
      		}
        };
    }
}
