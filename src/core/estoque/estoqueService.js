const jsreport = require("../../helpers/jsreport");


module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(produtos, estoque) {
    let estoqueFinal = [];
    let valorTotal = 0;

    produtos.forEach(prod => {

        estoqueFinal.push({
            codigo: prod.prod_codigo,
            nome: prod.prod_nome,
            disponivel: 0,
            custo: 0,
            subTotal: 0,
        });
    });

    estoqueFinal.forEach(est => {

        estoque.entrada.forEach(entrada => {

            if (entrada.prod_codigo == est.codigo) {
                est.custo = entrada.item_custo;
                est.disponivel += entrada.qtde;
                est.subTotal += (+entrada.item_custo * +entrada.qtde);
            }

        });

        estoque.saida.forEach(saida => {

            if (saida.prod_codigo == est.codigo) {
                est.disponivel -= saida.qtde;
                est.subTotal -= (+ent.item_custo * +ent.qtde);
            }

        });

        valorTotal += est.subTotal;
    });

    return jsreport.gerarRelatorio({ estoque: estoqueFinal, valorTotal }, 'estoque.html');
}