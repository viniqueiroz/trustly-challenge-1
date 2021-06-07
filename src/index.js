require('dotenv').config();
const express = require("express");
const config = require("./config/app");

class App {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        this.express.listen(config.port, () =>
            console.log(`The App is running on port ${config.port} in ${process.env.NODE_ENV} mode`)
        );
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(express.static('public'));
        this.express.use('/api/v1', require("./routes/routes"));
    }
}
module.exports = new App().express;