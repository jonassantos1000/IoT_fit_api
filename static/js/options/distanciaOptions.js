let vMax = 0

const atribuirVmax = (novoVmax) => {
      vMax = novoVmax + 20
      return vMax
}


const distanciaOptions  = (vMaxAtual) =>  {

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
                max: vMaxAtual > vMax ? atribuirVmax(vMaxAtual) : vMax,
                min:0
              }


    },
    width: 990,
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
}}