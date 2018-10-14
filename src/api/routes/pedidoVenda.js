const controller = require('../../core/pedidoVenda/pedidoVendaController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}