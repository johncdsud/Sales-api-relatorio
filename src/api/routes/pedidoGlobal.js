const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/pedidoGlobal/pedidoGlobalController.js');

module.exports = (app) => {

    app.route('/api/relatorio/pedidoGlobal/:codigo').get(asyncExec(controller.gerarRelatorio));
    app.route('/api/relatorio/pedidoGlobal').post(asyncExec(controller.gerarRelatorioTodosPedidos));
}