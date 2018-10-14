const jsreport = require("../../helpers/jsreport"),
    mask = require('../../helpers/mask');

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(params, title) {
    let pessoas = [];

    params.forEach(item => {
        pessoas.push({
            codigo: item.pessoa_codigo,
            nomeRazaoSocial: item.pessoa_nome_raz,
            apelidoNomeFantasia: item.pessoa_ape_fan,
            cpfCnpj: item.pessoa_cpf_cnpj,
            rgInscricao: item.pessoa_rg_ins,
            telefone: mask.telefone(item.pessoa_fone),
            celular: mask.celular(item.pessoa_cel),
            email: item.pessoa_email,
            cep: mask.cep(item.pessoa_cep),
            endereco: item.pessoa_end,
            numero: item.pessoa_num,
            bairro: item.pessoa_bairro,
            uf: item.pessoa_uf,
            cidade: item.pessoa_cidade
        });
    });

    let header = {
        title: title,
        isCpfOrCnpj: params[0].pessoa_tipo == 'PF' ? 'CPF' : 'CNPJ',
        isNomeOrRazaoSocial: params[0].pessoa_tipo == 'PF' ? 'Nome' : 'Razao Social',
        isApelidoOrFantasia: params[0].pessoa_tipo == 'PF' ? 'Apelido' : 'Nome Fantasia',
        isRgOrInscricao: params[0].pessoa_tipo == 'PF' ? 'RG' : 'Inscrição',
    }

    return jsreport.gerarRelatorio({ pessoas, header }, 'pessoas.html', 'landscape');
}