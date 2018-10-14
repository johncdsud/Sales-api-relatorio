const jsreport = require("../../helpers/jsreport"),
    mask = require('../../helpers/mask');

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(dados) {
    const params = {
        codigo: dados.emp_codigo,
        razaoSocial: dados.emp_razao,
        fantasia: dados.emp_fantasia,
        cnpj: dados.emp_cnpj,
        insricaoEstadual: dados.emp_rg_ins,
        telefone: mask.telefone(dados.emp_fone),
        celular: mask.celular(dados.emp_celular),
        email: dados.emp_email,
        cep: mask.cep(dados.emp_cep),
        endereco: dados.emp_end,
        numero: dados.emp_num,
        bairro: dados.emp_bairro,
        estado: dados.emp_estado,
        cidade: dados.emp_cidade,
        banco: dados.emp_banco,
        agencia: dados.emp_agencia,
        conta: dados.emp_conta,
        favorecido: dados.emp_favorecido
    }

    return jsreport.gerarRelatorio(params, 'empresa.html');
}