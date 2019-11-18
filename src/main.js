"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const newsController = require("./controllers/newsController");
const userController = require("./controllers/userController");
exports.app = express();
exports.port = 4000;
var originsWhitelist = [
    'http://localhost:4200'
];
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, originsWhitelist.indexOf(origin) !== -1);
    }
};
exports.app.use(cors(corsOptions));
exports.app.use(bodyParser.urlencoded({
    extended: true
}));
exports.app.use(bodyParser.json());
exports.app.head('', (req, res) => {
    res.status(200).send();
});
exports.app.get('/news', newsController.getNewsList);
exports.app.get('/news/:id', newsController.getNewsById);
exports.app.post('/news', newsController.insertNews);
exports.app.put('/news/:id', newsController.updateNews);
exports.app.delete('/news/:id', newsController.removeNews);
exports.app.get('/user', userController.getUserData);
exports.app.post('/user/register', userController.register);
exports.app.post('/user/login', userController.login);
//# sourceMappingURL=main.js.map