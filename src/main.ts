import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as newsController from './controllers/newsController';

export const app = express();
export const port = 4000;
var originsWhitelist = [
  'http://localhost:4200'
];
const corsOptions = {
  origin: function(origin, callback){
    callback(null, originsWhitelist.indexOf(origin) !== -1);
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.head('', (req, res) => {
  res.status(200).send();
});

app.get('/news', newsController.getNewsList);
app.get('/news/:id', newsController.getNewsById);
app.post('/news', newsController.insertNews);
app.put('/news/:id', newsController.updateNews);
app.delete('/news/:id', newsController.removeNews);
