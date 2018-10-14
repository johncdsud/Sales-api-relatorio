const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/empresa/empresaController.js');

module.exports = (app) => {

    app.route('/api/relatorio/empresa/:codigo').get(asyncExec(controller.gerarRelatorio));
}