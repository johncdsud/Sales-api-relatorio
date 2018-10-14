const controller = require('../../core/empresa/empresaController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}