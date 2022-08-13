class GraficoLinha extends Grafico{
    constructor(idGrafico, options){
        super(idGrafico,options.retornarOption(60))
        this._obj = options
        this._unidadeMedida = this._obj.option.medida
        this._eY = this._obj.option.hAxis.title
        this._eX = this._obj.option.vAxis.title
    }

     atualizarDados(valoresAPI) {
        if(this._valores.length == 0){
            this.adicionarDados([0, 0, `0 ${this._unidadeMedida}`, `Metros: 0 \nMinutos: 0`])
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
        this._data.addColumn({type: 'string', role: 'tooltip'});
    }

    criarLinhas() {
        this._data.addRows(this._valores);
    }
}