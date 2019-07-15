import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as newsController from './controllers/newsController';

const app = express();
const port = 4000;
var originsWhitelist = [
  'http://localhost:4200'
];
const corsOptions = {
  origin: function(origin, callback){
    callback(null, originsWhitelist.indexOf(origin) !== -1);
  }
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
const http = require('http').Server(app);

export default function runApi() {
    app.get('/news', newsController.getNews);
   
    http.listen(port, () => console.log(`Example app listening on port ${port}!`));
    return http;    
}
