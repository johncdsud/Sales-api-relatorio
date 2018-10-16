const jsreport = require("../../helpers/jsreport");


module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(params) {
    let grade = [];

    params.forEach(grad => {
        grade.push({
            codigo: grad.grade_codigo,
            descricao: grad.grade_descricao,  
                      
        });
    });

    return jsreport.gerarRelatorio({ grade }, 'grade.html');
}