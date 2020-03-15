import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as newsController from './controllers/newsController';
import * as imageController from './controllers/imageController';
import * as userController from './controllers/userController';
import auth from './middleware/auth.middleware';

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
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.head('', (req, res) => {
  res.status(200).send();
});

app.get('/news', newsController.getNewsList);
app.get('/news/:id', newsController.getNewsById);
app.post('/news', auth, newsController.insertNews);
app.put('/news/:id', auth, newsController.updateNews);
app.delete('/news/:id', auth, newsController.removeNews);

app.get('/image/:id', imageController.getImage);
app.delete('/image/:id', imageController.removeImage);

app.get('/user', auth, userController.getUserData);
app.post('/user/register', userController.register);
app.post('/user/login', userController.login);
