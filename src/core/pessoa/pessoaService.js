const jsreport = require("../../helpers/jsreport"),
    mask = require('../../helpers/mask');

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(dados) {
    const params = {
        codigo: dados.pessoa_codigo,
        nomeRazaoSocial: dados.pessoa_nome_raz,
        isCpfOrCnpj: dados.pessoa_tipo == 'PF' ? 'CPF' : 'CNPJ',
        apelidoNomeFantasia: dados.pessoa_ape_fan,
        cpfCnpj: dados.pessoa_cpf_cnpj,
        isRgOrInscricao: dados.pessoa_tipo == 'PF' ? 'RG' : 'Inscrição',
        rgInscricao: dados.pessoa_rg_ins,
        telefone: mask.telefone(dados.pessoa_fone),
        celular: mask.celular(dados.pessoa_cel),
        email: dados.pessoa_email,
        cep: mask.cep(dados.pessoa_cep),
        endereco: dados.pessoa_end,
        numero: dados.pessoa_num,
        bairro: dados.pessoa_bairro,
        uf: dados.pessoa_uf,
        cidade: dados.pessoa_cidade
    }

    return jsreport.gerarRelatorio(params, 'pessoa.html');
}