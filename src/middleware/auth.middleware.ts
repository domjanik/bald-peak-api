import * as jwt from 'jsonwebtoken';
import * as express from "express";
import extRequest from '../models/extenderRequestModel';

export default function auth(req: extRequest, res: express.Response, next) {
    req.user =  <userData>jwt.decode(req.headers.authorization);
    next(null, req, res);
}
