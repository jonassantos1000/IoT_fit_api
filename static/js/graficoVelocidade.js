class GraficoVelocidade extends Grafico{
    constructor(valores, googleChart, options){
        super(googleChart, valores, options)
    }

    atualizarDados(valoresAPI) {
        this._valores = valoresAPI
        this.criarTabela()
        super.desenharGrafico()
    }

    criarGrafico() {
        this.criarTabela()
        super.desenharGrafico()
    }

    criarTabela(){
        this._data = new google.visualization.DataTable()
        this.criarColuna()
        this.criarLinha()
    }

    criarColuna(){
        this._data.addColumn('string', 'Velocidade');
        this._data.addColumn('number', 'm/s');
    }

    criarLinha(){
        this._data.addRow(this._valores);
    }
}