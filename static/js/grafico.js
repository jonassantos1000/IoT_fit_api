class Grafico {
    constructor(idGrafico, options) {
        this._valores = []
        this._data = new google.visualization.DataTable()
        this._grafico = new google.visualization.LineChart(document.getElementById(idGrafico))
        this._options = options
    }

    atualizarDados(valoresAPI) {
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
    }

    desenharGrafico() {
        this._grafico.draw(this._data, this._options)
    }

    criarTabela() {
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
    }

    criarColuna() {
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
    }

    criarLinha() {
        throw new Error('Metodo abstrato, a classe filha precisa implementar')
    }
}
