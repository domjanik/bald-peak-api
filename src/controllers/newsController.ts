import * as newsService from '../services/newsService';
import * as express from 'express';


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

async function getNewsList(req: express.Request, res: express.Response) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });

    var data = newsService.getNews();
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
