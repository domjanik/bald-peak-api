"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService = require("../services/newsService");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
async function getNewsList(req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err)
            throw err;
        console.log("Database created!");
        db.close();
    });
    var data = newsService.getNews();
    return res.status(200).send(data);
}
exports.getNewsList = getNewsList;
function getNewsById(req, res) {
    var data = newsService.getNewsById(req.params.id);
    return res.status(200).send(data);
}
exports.getNewsById = getNewsById;
//# sourceMappingURL=newsController.js.map