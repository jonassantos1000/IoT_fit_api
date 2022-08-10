class GraficoVelocidade extends Grafico{

    constructor(valores, googleChart, options){
        super(googleChart, valores, options)
    }

    atualizarDados(valoresAPI) {
        this._velocidade = valoresAPI
        this.criarTabel()
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

    criarLinha(velocidade_media){
        this._data.addRow(['m/s', velocidade_media]);
    }
}