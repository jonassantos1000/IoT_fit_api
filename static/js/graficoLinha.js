class GraficoLinha extends Grafico{
    constructor(eY, eX, googleChart, valores, options, unidadeMedida){
        super(googleChart, valores,options.retornarOption(60))
        this._obj = options
        this._unidadeMedida= unidadeMedida
        this._eY = eY
        this._eX = eX
    }

     atualizarDados(valoresAPI) {
        if(this._valores.length == 0){
            this.adicionarDados([0, 0, `0 ${this._unidadeMedida}`])
        }
        this.adicionarDados(valoresAPI)
        this._options = this._obj.retornarOption(valoresAPI[1])
        this.criarTabela()
        super.desenharGrafico()
     }

     adicionarDados(dados){
        this._valores.push(dados)
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
        this._data.addColumn({type: 'string', role: 'annotation'});
    }

    criarLinhas() {
        this._data.addRows(this._valores);
    }
}