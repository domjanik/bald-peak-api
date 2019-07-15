"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const newsController = require("./controllers/newsController");
const app = express();
const port = 4000;
var originsWhitelist = [
    'http://localhost:4200'
];
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, originsWhitelist.indexOf(origin) !== -1);
    }
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const http = require('http').Server(app);
function runApi() {
    app.get('/news', newsController.getNews);
    http.listen(port, () => console.log(`Example app listening on port ${port}!`));
    return http;
}
exports.default = runApi;
//# sourceMappingURL=main.js.map