const jsreport = require("../../helpers/jsreport");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(dados) {
    const params = {
        codigo: dados.pedGlobalCod,
        cliente: dados.pessoa_nome_raz,
        cpfCnpj: dados.pessoa_cpf_cnpj,
        dataVenda: moment(dados.pedGlobal_data).format('DD/MM/YYYY'),
        condPagamento: dados.condpag_descricao,
        dataVencimento: moment(dados.pedGlobal_dataVencimento).format('DD/MM/YYYY'),
        uf: dados.pessoa_uf,
        endereco: dados.pessoa_bairro,
        numero: dados.pessoa_num,
        bairro: dados.pessoa_bairro,
        cep: dados.pessoa_cep,
        cidade: dados.pessoa_cidade,
        itens: dados.itens,
        empresa: {
            razaoSocial: dados.empresa.emp_razao,
            fantasia: dados.empresa.emp_fantasia,
            cnpj: dados.empresa.emp_cnpj,
            endereco: dados.empresa.emp_endereco,
            numero: dados.empresa.emp_num,
            cep: dados.empresa.emp_cep,
            cidade: dados.empresa.emp_cidade,
            estado: dados.empresa.emp_estado,
            telefone: dados.empresa.emp_fone
        },
        valorTotal: dados.total
    }

    return jsreport.gerarRelatorio(params, 'pedidoVenda.html');
}