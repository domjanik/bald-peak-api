"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService = require("../services/newsService");
async function getNewsList(req, res) {
    var data = await newsService.getNews();
    return res.status(200).send(data);
}
exports.getNewsList = getNewsList;
async function getNewsById(req, res) {
    var data = await newsService.getNewsById(req.params.id);
    return res.status(200).send(data);
}
exports.getNewsById = getNewsById;
async function insertNews(req, res) {
    var data = await newsService.insertNews(req.body);
    return res.status(200).send(data);
}
exports.insertNews = insertNews;
async function updateNews(req, res) {
    var data = await newsService.updateNews(req.params.id, req.body);
    return res.status(200).send(data);
}
exports.updateNews = updateNews;
async function removeNews(req, res) {
    var data = await newsService.removeNews(req.params.id);
    return res.status(200).send(data);
}
exports.removeNews = removeNews;
//# sourceMappingURL=newsController.js.map