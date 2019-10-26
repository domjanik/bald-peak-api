import * as newsService from '../services/newsService';
import * as express from 'express';

async function getNewsList(req: express.Request, res: express.Response) {
    var data = await newsService.getNews();
    return res.status(200).send(data);
}

async function getNewsById(req: express.Request, res: express.Response) {
    var data = await newsService.getNewsById(req.params.id);
    return res.status(200).send(data);
}

async function insertNews(req: express.Request, res: express.Response) {
    var data = await newsService.insertNews(req.body);
    return res.status(200).send(data);
}

async function updateNews(req: express.Request, res: express.Response) {
    var data = await newsService.updateNews(req.params.id, req.body);
    return res.status(200).send(data);
}

async function removeNews(req: express.Request, res: express.Response) {
    var data = await newsService.removeNews(req.params.id);
    return res.status(200).send(data);
}

export {
    getNewsList,
    getNewsById,
    insertNews,
    updateNews,
    removeNews
}
