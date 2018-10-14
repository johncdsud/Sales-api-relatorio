const controller = require('../../core/marcas/marcasController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}