"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbService = require("../services/databaseService");
async function getNews() {
    let data = await dbService.get({}, 'news');
    return data;
}
exports.getNews = getNews;
async function getNewsById(id) {
    let data = await dbService.get({ id: id }, 'news');
    return data;
}
exports.getNewsById = getNewsById;
async function insertNews(news) {
    let data = await dbService.insert(news, 'news');
    return data;
}
exports.insertNews = insertNews;
async function removeNews(id) {
    let data = await dbService.remove({ id: id }, 'news');
    return data;
}
exports.removeNews = removeNews;
async function updateNews(id, news) {
    let data = await dbService.update({ id: id }, news, 'news');
    return data;
}
exports.updateNews = updateNews;
//# sourceMappingURL=newsService.js.map