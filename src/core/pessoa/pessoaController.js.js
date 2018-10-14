const repository = require("./pessoaRepository"),
    service = require("./pessoaService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let pessoas = await repository.buscarPessoas(req.params.tipoPessoa);
    let title = trataTitle(req.params.tipoPessoa);
    const relatorio = await service.gerarRelatorio(pessoas, title);
    res.ok({ relatorio });
}

function trataTitle(tipoPessoa) {
    switch(tipoPessoa) {

        case 'PF':
            return 'Clientes P.F';

        case 'PJ':
            return 'Clientes P.J';

        case 'FORN':
            return 'Fornecedores';

        default:
            return '';
    }
}