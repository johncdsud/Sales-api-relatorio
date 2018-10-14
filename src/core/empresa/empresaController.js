const repository = require("./empresaRepository"),
    service = require("./empresaService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let empresa = await repository.buscarEmpresa(req.params.codigo);
    const relatorio = await service.gerarRelatorio(empresa);
    res.ok({ relatorio });
}