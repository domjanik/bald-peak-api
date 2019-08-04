import * as newsService from '../services/newsService';
import * as express from 'express';

function getNewsList(req: express.Request, res: express.Response) {
    var data = newsService.getNews()
    return res.status(200).send(data);
}

function getNewsById(req: express.Request, res: express.Response) {
    var data = newsService.getNewsById(req.params.id);
    return res.status(200).send(data);
}

export {
    getNewsList,
    getNewsById
}