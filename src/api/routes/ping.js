module.exports = (app) => {

    app.route('/ping').get((req, res) => {
        res.status(200).json({
            message: 'PedControl API Relatorio Online',
            data: new Date()
        });
    });
}