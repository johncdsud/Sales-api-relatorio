const jsreport = require("../../helpers/jsreport");

module.exports = {
    gerarRelatorio,
    gerarRelatorioTodosPedidos
}

async function gerarRelatorio(dados) {
    const params = {
        codigo: dados.pedcalc_codigo,
        dataPedido: moment(dados.dataped).format('DD/MM/YYYY'),
        dataPagamento: moment(dados.data_entrega).format('DD/MM/YYYY'),
        cliente: dados.pessoa_nome_raz,
        itens: dados.itens,
        valorTotal: dados.total,
        quantidadeTotal: dados.quantidadeTotal
    }

    return jsreport.gerarRelatorio(params, 'pedidoGrade.html', 'landscape');
}

async function gerarRelatorioTodosPedidos(pedidos, items) {
    let pedidosGrade = [];
    let quantidadeTotal = 0;
    let valorTotal = 0;

    pedidos.forEach(ped => {

        pedidosGrade.push({
            codigo: ped.pedcalc_codigo,
            cliente: ped.pessoa_nome_raz,
            dataPedido: moment(ped.dataped).format('DD/MM/YYYY'),
            quantidadeTotal: 0,
            valorTotal: 0
        });
    });

    pedidosGrade.forEach(pedGrade => {

        items.forEach(item => {
            
            if(item.pedcalc_codigo == pedGrade.codigo) {
                pedGrade.quantidadeTotal += +item.item_pedcalc_qtde;
                pedGrade.valorTotal += (+item.item_pedcalc_qtde * +item.item_pedcalc_preco);
            }
        });

        quantidadeTotal += pedGrade.quantidadeTotal;
        valorTotal += pedGrade.valorTotal;
    })
    
    return jsreport.gerarRelatorio({ pedidosGrade, quantidadeTotal, valorTotal }, 'TodosPedidosGrade.html');
}