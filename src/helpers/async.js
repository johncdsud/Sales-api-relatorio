function asyncController(controller) {
    return async (req, res) => {
        try {
            await controller(req, res);
        }
        catch(ex) {
            console.log(ex.message || ex.stack);
            res.error(ex.message || ex.stack, ex.statusCode || 500);
        }
    }
}

module.exports = asyncController;