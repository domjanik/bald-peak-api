import * as newsService from '../services/newsService';

function getNews(req, res) {
    var data = newsService.getNews()
    return res.status(200).send(data);
}

export {
    getNews
}