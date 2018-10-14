const repository = require("./pedidoGradeRepository"),
    service = require("./pedidoGradeService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let pedidoGrade = await repository.buscarPedidoGrade(req.params.codigo);
    const relatorio = await service.gerarRelatorio(pedidoGrade);
    res.ok({ relatorio });
}