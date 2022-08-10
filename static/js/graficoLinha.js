class GraficoLinha extends Grafico{
    constructor(eY, eX, googleChart, valores, options){
        super(googleChart, valores,options.retornarOptions(60))
        this._eY = eY
        this._eX = eX
        this._obj = options
    }

     atualizarDados(valoresAPI, distanciaAnterior) {
        this._valores.push(valoresAPI)
        this._options = this._obj.retornarOptions(valoresAPI[1])
        this.criarTabela()
        super.desenharGrafico()
     }

     criarTabela(){
        this._data = new google.visualization.DataTable()
        this.criarColunas()
        this.criarLinhas()
     }

     criarGrafico() {
        this.criarTabela()
        super.desenharGrafico()
     }

     criarColunas() {
        this._data.addColumn('number', this._eY)
        this._data.addColumn('number', this._eX)
    }

    criarLinhas() {
        this._data.addRows(this._valores);
    }
}