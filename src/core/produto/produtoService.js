const jsreport = require("../../helpers/jsreport");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(params) {
    let produtos = [];

    params.forEach(prod => {
        produtos.push({
            codigo: prod.prod_codigo,
            nome: prod.prod_nome,
            ncm: prod.prod_ncm,
            custo: prod.prod_custo,
            valorVenda: prod.prod_venda,
            marca: prod.marca_nome
        });
    });

    return jsreport.gerarRelatorio({ produtos }, 'produtos.html');
}