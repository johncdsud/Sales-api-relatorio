const repository = require("./gradeRepository"),
    service = require("./gradeService");

module.exports = {
    gerarRelatorio
}

async function gerarRelatorio(req, res) {
    let grade = await repository.buscarGrade();
    const relatorio = await service.gerarRelatorio(grade);
    res.ok({ relatorio });
}