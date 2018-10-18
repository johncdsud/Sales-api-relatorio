const repository = require("./pedidoGlobalRepository"),
    service = require("./pedidoGlobalService");

module.exports = {
    gerarRelatorio,
    gerarRelatorioTodosPedidos
}

async function gerarRelatorio(req, res) {
    let pedidoGlobal = await repository.buscarPedidoGlobal(req.params.codigo);
    const relatorio = await service.gerarRelatorio(pedidoGlobal);
    res.ok({ relatorio });
}

async function gerarRelatorioTodosPedidos(req, res) {
    let pedidos = await repository.buscarTodosPedidos(req.body);
    let itemsPedido = await repository.buscarTodosItemsPedidos();
    const relatorio = await service.gerarRelatorioTodosPedidos(pedidos, itemsPedido);
    res.ok({ relatorio });
}