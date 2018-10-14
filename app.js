const config = require("./config/settings"),
    path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express();

// moment global
moment = require("moment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware de reposta
app.use(require('./src/api/middleware/response'));

// deixando a rota estatica para acessar os relatorios
app.use('/relatorios', express.static(path.join(__dirname, '/src/resources/uploads')));

//cors
app.use(cors());

// routes
require('./src/api/routes/pessoa')(app);
require('./src/api/routes/empresa')(app);
require('./src/api/routes/produto')(app);
require('./src/api/routes/pedidoGrade')(app);
require('./src/api/routes/pedidoVenda')(app);

app.listen(config.port, () => {
    console.log('SERVER LISTENING ON', config.port);
})