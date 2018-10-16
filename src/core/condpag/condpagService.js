const jsreport = require("../../helpers/jsreport");


module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(params) {
    let condpag = [];

    params.forEach(cond => {
        condpag.push({
            codigo: cond.condpag_codigo,
            descricao: cond.condpag_descricao
        });
    });

    return jsreport.gerarRelatorio({ condpag }, 'condpag.html');
}