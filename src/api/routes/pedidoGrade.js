const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/pedidoGrade/pedidoGradeController.js');

module.exports = (app) => {

    app.route('/api/relatorio/pedidoGrade/:codigo').get(asyncExec(controller.gerarRelatorio));
    app.route('/api/relatorio/pedidoGrade').post(asyncExec(controller.gerarRelatorioTodosPedidos));
}