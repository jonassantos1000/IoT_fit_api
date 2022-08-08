function desenharGrafico(){
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(desenharGraficoLinha);
};

desenharGrafico();

function requisicao(){
    fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
      method: 'POST',
      body: JSON.stringify({
      "aggregateBy": [{
        "dataTypeName": "com.google.step_count.delta"},
        {"dataTypeName": "com.google.distance.delta"}
        ],
      "bucketByTime": { "durationMillis": 86400000 },
      "startTimeMillis": 1659624000000,
      "endTimeMillis": 1659624315457
    }),
      headers: new Headers({
        'Authorization':  'Bearer ya29.A0AVA9y1sGD7yB_WmRmN3G2_X3x_qPq8Cx_SERUz3XNitC_b1yEkdAORQE_QqwdqE3zEgc2CAp_GIxwPr4VZmvO8hKG0MoR0AmiKlKInORdFMyQdU0HW4k-EOssNwTZETKPIKTfeOb182yvhmb7GRAhQNLsYr4aCgYKATASATASFQE65dr8iUQMAv2MXiGmfsQkycGDZw0163'
      })
    }).then(resp => resp.json())
        .then(resp => console.log(resp.bucket[0].dataset[0].point[0].value[0].intVal, resp.bucket[0].dataset[1].point[0].value[0].fpVal))
}


