const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/estoque/estoqueController.js');

module.exports = (app) => {

    app.route('/api/relatorio/estoque').get(asyncExec(controller.gerarRelatorio));
}