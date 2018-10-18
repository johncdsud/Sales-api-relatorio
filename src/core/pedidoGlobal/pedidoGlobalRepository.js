const db = require("../../../config/dbConnection"),
    tabela = 'PEDIDOGLOBAL',
    tabela2 = 'ITEMPEDGLOBAL';

module.exports = {
    buscarPedidoGlobal,
    buscarTodosPedidos,
    buscarTodosItemsPedidos
}


async function buscarPedidoGlobal(codigo) {
    // buscando o pedido   
    let query = `SELECT * FROM ${tabela} pg INNER JOIN PESSOA p ON p.pessoa_codigo = pg.pessoa_codigo INNER JOIN CONDPAG cp ON cp.condpag_codigo = pg.condpag_codigo WHERE pg.pedGlobalCod = ${codigo}`;
    let retorno = await db.querySync(query);
    let pedidoGlobal = retorno[0];

    // buscando itens do pedido
    query = `SELECT * FROM ${tabela2} i INNER JOIN PRODUTO p ON p.prod_codigo = i.prod_codigo WHERE i.pedGlobalCod = ${codigo}`
    pedidoGlobal.itens = await db.querySync(query);

    // total da venda
    pedidoGlobal.total = 0;
    pedidoGlobal.itens.forEach(item => {

        // subTotal do item
        item.subTotal = (+item.unitarioPedGlobal * +item.qtdePedGlobal);

        // total venda
        pedidoGlobal.total += item.subTotal;
    });

    // buscando a empresa
    query = `SELECT * FROM EMPRESA;`
    let empresa = await db.querySync(query);
    pedidoGlobal.empresa = empresa[0];

    return pedidoGlobal;
}

async function buscarTodosPedidos(data) {
    let query = `SELECT * from ${tabela} pc INNER JOIN PESSOA pes ON pes.pessoa_codigo = pc.pessoa_codigo WHERE pc.pedGlobal_data between '${data.inicio}' AND '${data.fim}'`;
    return db.querySync(query);
}

async function buscarTodosItemsPedidos() {
    let query = `SELECT * FROM ${tabela2}`;
    return db.querySync(query);
}