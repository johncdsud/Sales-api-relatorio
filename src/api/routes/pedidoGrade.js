const controller = require('../../core/pedidoGrade/pedidoGradeController');

module.exports = (app) => {

    app.route('/ping').post(controller.gerar);
}