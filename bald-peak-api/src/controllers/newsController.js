"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService = require("../services/newsService");
function getNewsList(req, res) {
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