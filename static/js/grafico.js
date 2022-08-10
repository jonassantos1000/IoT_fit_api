class Grafico {
    constructor(eY, eX, googleChart, valores, options){
        this._eY = eY
        this._eX = eX
        this._valores = valores
        this._data = new google.visualization.DataTable()
        this._grafico = googleChart
        this._options = options
    }

     atualizarDados(valoresAPI) {
        this._valores.push(valoresAPI)
        this.criarTabela()
        this.desenharGrafico()
     }

     criarTabela(){
        this._data = new google.visualization.DataTable()
        this.criarColunas()
        this.criarLinhas()
     }

     desenharGrafico() {
            this._grafico.draw(this._data, this._options)
     }

     criarGrafico() {
            this.criarTabela()
            this._grafico.draw(this._data, this._options)
     }

     criarColunas() {
        this._data.addColumn('number', this._eY)
        this._data.addColumn('number', this._eX)

    }

    criarLinhas() {
        this._data.addRows(this._valores);
    }

}
