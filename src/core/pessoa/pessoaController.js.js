const repository = require("./pessoaRepository"),
    service = require("./pessoaService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let pessoa = await repository.buscarPessoa(req.params.codigo);
    const relatorio = await service.gerarRelatorio(pessoa, 'pessoa.html');
    res.ok({ relatorio });
}