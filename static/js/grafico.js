class Grafico {
    constructor(eY, eX, googleChart, valores, options){
        this._eY = eY
        this._eX = eX
        this._valores = valores
        this._data = new google.visualization.DataTable();
        this._grafico = googleChart
        this._options = options
    }

     atualizarDados(valoresAPI) {
        this._valores.push(valoresAPI)
        this._data.addRows(this._valores);
        this.desenharGrafico()
     }

     criarColunas() {
        this._data.addColumn('number', this._eY)
        this._data.addColumn('number', this._eX)

    }

    criarLinhas() {
            this._data.addRows(this._valores);
    }

     desenharGrafico() {
            this._grafico.draw(this._data, this._options);
     }

     criarGrafico() {
            this.criarColunas()
            this.criarLinhas()
            this._grafico.draw(this._data, this._options);
     }

}