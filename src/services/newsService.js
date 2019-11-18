"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbService = require("../services/databaseService");
async function getNews() {
    return await dbService.get({}, dbService.databaseTables.news);
}
exports.getNews = getNews;
async function getNewsById(id) {
    return await dbService.get({ id: id }, dbService.databaseTables.news);
}
exports.getNewsById = getNewsById;
async function getLastId() {
    return await dbService.getLastId(dbService.databaseTables.news);
}
exports.getLastId = getLastId;
async function insertNews(news) {
    return await dbService.insert(news, dbService.databaseTables.news);
}
exports.insertNews = insertNews;
async function removeNews(id) {
    return await dbService.remove({ id: id }, dbService.databaseTables.news);
}
exports.removeNews = removeNews;
async function updateNews(id, news) {
    return await dbService.update({ id: id }, news, dbService.databaseTables.news);
}
exports.updateNews = updateNews;
//# sourceMappingURL=newsService.js.map