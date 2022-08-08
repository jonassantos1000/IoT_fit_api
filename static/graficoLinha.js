   function desenharGraficoLinha() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Tempo (min)')
        data.addColumn('number', 'Distância (metros)')

        list =  [[1, 0],
        [2, 5],
        [3,10],
        [4, 3],
        [5, 7],
        [6, 8],
        [7, 11],
        [8, 13],
        [9, 4],
        [10, 6]]

        list.forEach((valores) => {
            data.addRows([
                valores
            ])
        })

        var options = {
          title: 'Distância percorrida x tempo',
          legend: 'none',
          hAxis: {
            title: 'Tempo (min)',
            baselineColor: '#8f9bb3',
            gridlineColor: '#8f9bb3',
            titleTextStyle: {
            color: 'white'
            },
            textStyle: {
            color: '#8f9bb3'
        }
            },
            vAxis: {
          title: 'Distância (metros)',
          baselineColor: '#8f9bb3',
            gridlineColor: '#8f9bb3',
           titleTextStyle: {
            color: 'white'
            },
            textStyle: {
            color: '#8f9bb3'
        }
        },
        width: 990,
        height: 300,
         titleTextStyle: {
        color: 'white'
        },
        backgroundColor: '#222b45',
        colors: ['rgb(0, 214, 143)'],
        fontName:'Sora',
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }