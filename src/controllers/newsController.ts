import * as newsService from '../services/newsService';
import * as express from 'express';

const mariadb = require('mariadb');
const pool = mariadb.createPool({host: '54.38.53.216:3306', user: 'root', password: 'D@nt3!!123', connectionLimit: 5});

async function getNewsList(req: express.Request, res: express.Response) {
    try {
        const connection = await pool.getConnection();
        const rows = await connection.query('SHOW TABLES');
        console.log(rows);
    } catch(err) {
        throw(err);
    }
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
