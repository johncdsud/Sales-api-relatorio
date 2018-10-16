const asyncExec = require("../../helpers/async"), 
    controller = require('../../core/grade/gradeController');

module.exports = (app) => {

    app.route('/api/relatorio/grade').get(asyncExec(controller.gerarRelatorio));
}