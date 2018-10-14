const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/pedidoVenda/pedidoVendaController.js');

module.exports = (app) => {

    app.route('/api/relatorio/pedidoVenda/:codigo').get(asyncExec(controller.gerarRelatorio));
}