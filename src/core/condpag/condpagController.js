const repository = require("./condpagRepository"),
    service = require("./condpagService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let condpag = await repository.buscarCondpag();
    const relatorio = await service.gerarRelatorio(condpag);
    res.ok({ relatorio });
}