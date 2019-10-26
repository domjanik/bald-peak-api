import * as dbService from '../services/databaseService';

async function getNews() {
    let data = await dbService.get({}, 'news');
    return data;
}

async function getNewsById(id) {
    let data = await dbService.get({id: id}, 'news');
    return data;
}


async function insertNews(news) {
    let data = await dbService.insert(news, 'news');
    return data;
}

async function removeNews(id) {
    let data = await dbService.remove({id: id}, 'news');
    return data;
}

async function updateNews(id, news) {
    let data = await dbService.update({id: id}, news, 'news');
    return data;
}

export {
    getNews,
    getNewsById,
    removeNews,
    insertNews,
    updateNews
};
