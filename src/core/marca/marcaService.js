const jsreport = require("../../helpers/jsreport");


module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(params) {
    let marca = [];

    params.forEach(marc => {
        marca.push({
            codigo: marc.marca_codigo,
            nome: marc.marca_nome,
            linha: marc.marca_linha,
        });
    });

    return jsreport.gerarRelatorio({ marca }, 'marca.html');
}