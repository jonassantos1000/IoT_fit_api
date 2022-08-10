class Grafico {
    constructor(googleChart, valores, options){
        this._valores = valores
        this._data = new google.visualization.DataTable()
        this._grafico = googleChart
        this._options = options
    }

     atualizarDados(valoresAPI, distanciaAnterior) {
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
     }

     desenharGrafico() {
         this._grafico.draw(this._data, this._options)
     }

     criarTabela(){
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
     }

    criarColuna(){
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
    }

    criarLinha(){
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
    }
}
