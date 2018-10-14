const db = require("../../../config/dbConnection"),
    tabela = 'PEDIDOGLOBAL',
    tabela2 = 'ITEMPEDGLOBAL';

module.exports = {
    buscarPedidoVenda
}

async function buscarPedidoVenda(codigo) {
    // buscando o pedido
    let query = `SELECT * FROM ${tabela} pg INNER JOIN PESSOA p ON p.pessoa_codigo = pg.pessoa_codigo INNER JOIN CONDPAG cp ON cp.condpag_codigo = pg.condpag_codigo WHERE pg.pedGlobalCod = ${codigo}`;
    let retorno = await db.querySync(query);
    let pedidoVenda = retorno[0];

    // buscando itens do pedido
    query = `SELECT * FROM ${tabela2} i INNER JOIN PRODUTO p ON p.prod_codigo = i.prod_codigo WHERE i.pedGlobalCod = ${codigo}`
    pedidoVenda.itens = await db.querySync(query);

    // total da venda
    pedidoVenda.total = 0;
    pedidoVenda.itens.forEach(item => {

        // subTotal do item
        item.subTotal = (+item.unitarioPedGlobal * +item.qtdePedGlobal);

        // total venda
        pedidoVenda.total += item.subTotal;
    });

    // buscando a empresa
    query = `SELECT * FROM EMPRESA;`
    let empresa = await db.querySync(query);
    pedidoVenda.empresa = empresa[0];

    return pedidoVenda;
}