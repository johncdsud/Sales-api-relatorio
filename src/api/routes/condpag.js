const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/condpag/condpagController.js');

module.exports = (app) => {

    app.route('/api/relatorio/condpag').get(asyncExec(controller.gerarRelatorio));
}