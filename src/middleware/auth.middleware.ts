import * as jwt from 'jsonwebtoken';
import * as express from "express";
import extRequest from '../models/extenderRequestModel';
import userToken from "../models/userToken";

export default function auth(req: extRequest, res: express.Response, next) {
    req.user =  <userToken>jwt.decode(req.headers.authorization);
    if(req.user && req.user.exp * 1000 > Date.now()){
        next(null, req, res);
    } else {
        res.status(401).send();
    }
}
