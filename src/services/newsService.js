"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbService = require("../services/databaseService");
async function getNews() {
    return await dbService.get({}, dbService.databaseTables.news);
}
exports.getNews = getNews;
async function getNewsById(id) {
    if (Number(id) == id) {
        return (await dbService.get({ id: Number(id) }, dbService.databaseTables.news))[0];
    }
    else {
        throw new Error('Invalid ID');
    }
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
    return await dbService.remove({ id: Number(id) }, dbService.databaseTables.news);
}
exports.removeNews = removeNews;
async function updateNews(id, news) {
    return await dbService.update({ id: Number(id) }, news, dbService.databaseTables.news);
}
exports.updateNews = updateNews;
//# sourceMappingURL=newsService.js.map