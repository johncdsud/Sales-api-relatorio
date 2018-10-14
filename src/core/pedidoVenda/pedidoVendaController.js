const repository = require("./pedidoVendaRepository"),
    service = require("./pedidoVendaService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let pedidoVenda = await repository.buscarPedidoVenda(req.params.codigo);
    const relatorio = await service.gerarRelatorio(pedidoVenda);
    res.ok({ relatorio });
}