import * as dbService from '../services/databaseService';

async function getNews() {
    return await dbService.get({}, dbService.databaseTables.news);
}

async function getNewsById(id) {
    if (Number(id) == id) {
        return (await dbService.get({id: Number(id)}, dbService.databaseTables.news))[0];
    } else {
        throw new Error('Invalid ID');
    }
}

async function getLastId(): Promise<any> {
    return await dbService.getLastId(dbService.databaseTables.news);
}

async function insertNews(news) {
    return await dbService.insert(news, dbService.databaseTables.news);
}

async function removeNews(id) {
    return await dbService.remove({id: Number(id)}, dbService.databaseTables.news);
}

async function updateNews(id, news) {
    return await dbService.update({id: Number(id)}, news, dbService.databaseTables.news);
}

export {
    getNews,
    getNewsById,
    getLastId,
    removeNews,
    insertNews,
    updateNews
};
