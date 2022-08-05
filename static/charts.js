function desenharGrafico(){
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Tempo (min)')
        data.addColumn('number', 'Distância (metros)')


        data.addRows([
        [Math.random() * (15 - 1) + 1, Math.random() * (15 - 1) + 1],
        [Math.random() * (15 - 1) + 1, Math.random() * (15 - 1) + 1],
        [Math.random() * (15 - 1) + 1, Math.random() * (15 - 1) + 1],
        [Math.random() * (15 - 1) + 1, Math.random() * (15 - 1) + 1],
        [Math.random() * (15 - 1) + 1, Math.random() * (15 - 1) + 1],
        [Math.random() * (15 - 1) + 1, Math.random() * (15 - 1) + 1]

        ])

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
};

desenharGrafico();

fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
  method: 'POST',
  body: JSON.stringify({
  "aggregateBy": [{
    "dataTypeName": "com.google.step_count.delta",
    "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
  }],
  "bucketByTime": { "durationMillis": 86400000 },
  "startTimeMillis": 1659624000000,
  "endTimeMillis": 1659624315457
}),
  headers: new Headers({
    'Authorization': 'Bearer ya29.A0AVA9y1vmT8YbwxvlGth35fIgi9u2AdOIzyW6umMIiFVQRgdGoGN7Jm2NmLgTXAY6eBODLxVISDgqAqvs2uArG5NdxVwgQL9shWi4bJKqvOYjUFRkGwvZMWsGTeDXnrxjD9G15m9ZzIfkabyQNzIWt7FW7tjqaCgYKATASATASFQE65dr8PdmHQHbr_vosh4WK6xPvNQ0163'
  })
}).then(resp => resp.json())
    .then(resp => console.log(resp.bucket[0].dataset[0].point[0].value[0].intVal))