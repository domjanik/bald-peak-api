"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService = require("../services/newsService");
const imageService = require("../services/imageService");
const newsModel_1 = require("../models/newsModel");
async function getNewsList(req, res) {
    let data = await newsService.getNews();
    return res.status(200).send(data);
}
exports.getNewsList = getNewsList;
async function getNewsById(req, res) {
    let data = await newsService.getNewsById(req.params.id);
    return res.status(200).send(data);
}
exports.getNewsById = getNewsById;
async function insertNews(req, res) {
    try {
        let newNews = new newsModel_1.default(req.body, { id: req.user.id });
        newNews.id = await newsService.getLastId() + 1;
        if (req.body.image) {
            newNews.avatarId = await imageService.insertImage(req.body.image);
        }
        let data = await newsService.insertNews(newNews);
        return res.status(200).send(data);
    }
    catch (err) {
        console.error(err);
        return res.status(400).send('Invalid request');
    }
}
exports.insertNews = insertNews;
async function updateNews(req, res) {
    let data = await newsService.updateNews(req.params.id, req.body);
    return res.status(200).send(data);
}
exports.updateNews = updateNews;
async function removeNews(req, res) {
    let data = await newsService.removeNews(req.params.id);
    return res.status(200).send(data);
}
exports.removeNews = removeNews;
//# sourceMappingURL=newsController.js.map