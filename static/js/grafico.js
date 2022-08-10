class Grafico {
    constructor(googleChart, valores, options){
        this._valores = valores
        this._data = new google.visualization.DataTable()
        this._grafico = googleChart
        this._options = options
    }

     atualizarDados(valoresAPI, distanciaAnterior) {
        throw new Error('metodo abstrato, precisa implementar')
     }

     desenharGrafico() {
         this._grafico.draw(this._data, this._options)
     }
}
