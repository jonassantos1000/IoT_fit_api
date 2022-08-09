let linhas = [[0,0, '0 m/s'] ]

 function implementarLinhasDistancia() {
        linhas.push([2,23, '100 m/s'])
        return linhas
 }

 function criarColunas(data) {
        data.addColumn('number', 'Tempo (min)')
        data.addColumn('number', 'Distância (metros)')
        data.addColumn({type: 'string', role: 'annotation'});
  }


 function desenharGraficoDistancia() {



         new google.visualization.LineChart(document.getElementById('curve_chart'));



   }



