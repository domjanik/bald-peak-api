"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService = require("../services/newsService");
const mariadb = require('mariadb');
const pool = mariadb.createPool({ host: '54.38.53.216:3306', user: 'root', password: 'D@nt3!!123', connectionLimit: 5 });
async function getNewsList(req, res) {
    try {
        const connection = await pool.getConnection();
        const rows = await connection.query('SHOW TABLES');
        console.log(rows);
    }
    catch (err) {
        throw (err);
    }
    var data = newsService.getNews();
    return res.status(200).send(data);
}
exports.getNewsList = getNewsList;
function getNewsById(req, res) {
    var data = newsService.getNewsById(req.params.id);
    return res.status(200).send(data);
}
exports.getNewsById = getNewsById;
//# sourceMappingURL=newsController.js.map