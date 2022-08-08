let linhas = [[0,0], [2,5]]

 function implementarLinhas() {
        linhas.push([2,23])
        return linhas
 }

 function criarColunas(data) {
        data.addColumn('number', 'Tempo (min)')
        data.addColumn('number', 'Distância (metros)')
  }


 function desenharGraficoLinha() {
        var data = new google.visualization.DataTable();

        criarColunas(data);

        data.addRows(implementarLinhas());

        var options = linhaOptions;

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);

   }


