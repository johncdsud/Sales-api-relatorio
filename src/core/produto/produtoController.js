const repository = require("./produtoRepository"),
    service = require("./produtoService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let produtos = await repository.buscarProdutos();
    const relatorio = await service.gerarRelatorio(produtos);
    res.ok({ relatorio });
}