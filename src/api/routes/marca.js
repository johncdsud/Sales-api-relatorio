const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/marca/marcaController');

module.exports = (app) => {

    app.route('/api/relatorio/marca').get(asyncExec(controller.gerarRelatorio));
}