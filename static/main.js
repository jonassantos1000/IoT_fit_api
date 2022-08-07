function desenharGrafico(){
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(desenharGraficoLinha);
};


desenharGrafico();

fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
  method: 'POST',
  body: JSON.stringify({
  "aggregateBy": [{
    "dataTypeName": "com.google.step_count.delta"}],
  "bucketByTime": { "durationMillis": 86400000 },
  "startTimeMillis": 1659624000000,
  "endTimeMillis": 1659624315457
}),
  headers: new Headers({
    'Authorization': 'Bearer ya29.A0AVA9y1veZ3fqYsxnG0XiSEeFe5HKU51cm2yiLeHX9l1TdU9jU3fqrDagoWgsg_4VCpYgJPu_fqLGxP07O89u5U4n3R1tfVafQDnThKTLRScMsl4GXvxJYJqm4sZmasLgCJAvcUPRlT9fuD82SrrPRThztoWJaCgYKATASATASFQE65dr8bt26_f-QAB39yUPksI3zjA0163'
  })
}).then(resp => resp.json())
    .then(resp => console.log(resp.bucket[0].dataset[0].point[0].value[0].intVal))