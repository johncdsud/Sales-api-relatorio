const repository = require("./pedidoGradeRepository"),
    service = require("./pedidoGradeService");

module.exports = {
    gerarRelatorio,
    gerarRelatorioTodosPedidos
}

async function gerarRelatorio(req, res) {
    let pedidoGrade = await repository.buscarPedidoGrade(req.params.codigo);
    const relatorio = await service.gerarRelatorio(pedidoGrade);
    res.ok({ relatorio });
}

async function gerarRelatorioTodosPedidos(req, res) {
    let pedidos = await repository.buscarTodosPedidos(req.body);
    let itemsPedido = await repository.buscarTodosItemsPedidos();
    const relatorio = await service.gerarRelatorioTodosPedidos(pedidos, itemsPedido);
    res.ok({ relatorio });
}