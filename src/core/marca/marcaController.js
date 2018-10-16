const repository = require("./marcaRepository"),
    service = require("./marcaService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let marca = await repository.buscarMarca();
    const relatorio = await service.gerarRelatorio(marca);
    res.ok({ relatorio });
}