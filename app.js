const config = require("./config/settings"),
    path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express();

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

app.listen(config.port, () => {
    console.log('SERVER LISTENING ON', config.port);
})