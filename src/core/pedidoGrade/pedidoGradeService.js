const jsreport = require("../../helpers/jsreport");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(dados) {
    const params = {
        codigo: dados.pedcalc_codigo,
        dataPedido: moment(dados.dataped).format('DD/MM/YYYY'),
        dataPagamento: moment(dados.data_entrega).format('DD/MM/YYYY'),
        cliente: dados.pessoa_nome_raz,
        itens: dados.itens,
        valorTotal: dados.total,
        quantidadeTotal: dados.quantidadeTotal,
    }

    return jsreport.gerarRelatorio(params, 'pedidoGrade.html', 'landscape');
}