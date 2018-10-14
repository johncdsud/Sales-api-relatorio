const db = require("../../../config/dbConnection"),
    tabela = 'PEDIDOCALCADO',
    tabela2 = 'ITEM_PEDCALC',
    tabela3 = 'ITEM_PED_GRAD'

module.exports = {
    buscarPedidoGrade
}

async function buscarPedidoGrade(codigo) {
    // buscando o pedido
    let query = `SELECT * FROM ${tabela} pg INNER JOIN PESSOA p ON p.pessoa_codigo = pg.pessoa_codigo WHERE pedcalc_codigo = ${codigo}`;
    let retorno = await db.querySync(query);
    let pedidoGrade = retorno[0];

    // buscando os itens do pedido
    query = `SELECT * FROM ${tabela2} i INNER JOIN PRODUTO p ON p.prod_codigo = i.prod_codigo INNER JOIN GRADE g ON g.grade_codigo = i.cod_grade WHERE i.pedcalc_codigo = ${codigo}`;
    pedidoGrade.itens = await db.querySync(query);

    if (!pedidoGrade.itens || !pedidoGrade.itens.length)
        return pedidoGrade;

    //buscando as grades dos itens
    query = `SELECT * FROM ${tabela3}`;
    let itensGrade = await db.querySync(query);

    if(!itensGrade || !itensGrade.length)
        return pedidoGrade;

    pedidoGrade.total = 0;
    pedidoGrade.quantidadeTotal = 0;
    // organizando os itens para seus respectivos pais
    pedidoGrade.itens.forEach((item) => {

        // pegando o total do item
        item.total = 0;
        item.total += (+item.item_pedcalc_preco * +item.item_pedcalc_qtde);

        // pegando o total do pedido
        pedidoGrade.quantidadeTotal += +item.item_pedcalc_qtde;
        pedidoGrade.total += (+item.item_pedcalc_preco * +item.item_pedcalc_qtde);
        
        item.grade = [];
        itensGrade.forEach((grade) => {
    
            if(item.item_pedcalc_cod == grade.item_pedcalc_cod)
                item.grade.push(grade);
        });
    });

    return pedidoGrade;
}