const repository = require("./estoqueRepository"),
    service = require("./estoqueService"),
    produtoRepository = require("../produto/produtoRepository");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let produtos = await produtoRepository.buscarProdutos();
    let estoque = await repository.buscarEstoque();
    const relatorio = await service.gerarRelatorio(produtos, estoque);
    res.ok({ relatorio });
}