const controller = require('../../core/estoquesaida/estoquesaidaController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}