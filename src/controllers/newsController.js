"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService = require("../services/newsService");
function getNews(req, res) {
    var data = newsService.getNews();
    return res.status(200).send(data);
}
exports.getNews = getNews;
//# sourceMappingURL=newsController.js.map