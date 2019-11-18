import * as userService from '../services/userService';
import * as express from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from "../models/userModel";
const config = require('../config/config.json');

async function register(req: express.Request, res: express.Response) {
    try {
        let data = new User(req.body);
        if ((await userService.getUserByLogin(data.userName)).length) {
            console.error(`User ${data.userName} already exists`);
            return res.status(400).send('Invalid data');
        } else {
            await userService.register(data);
            return res.status(200).send();
        }
    } catch (err) {
        console.error(err);
        res.status(400).send('Invalid data');
    }
}

async function login(req: express.Request, res: express.Response) {
    let savedUser: User[] = await userService.getUserByLogin(req.body.userName);
    if (!savedUser.length) {
        console.error('Invalid username');
        res.status(400).send('Invalid data');
    }
    bcrypt.compare(req.body.password, savedUser[0].password, (err, result) => {
        if (err || !result) {
            console.error('Invalid password');
            return res.status(400).send('Invalid data');
        } else {
            const token = jwt.sign({
                userName: savedUser[0].userName,
                id: savedUser[0].id
            }, config.security.key, { expiresIn: '1h' });
            return res.status(200).send(token);
        }
    });
}

async function getUserData(req: express.Request, res: express.Response) {
    let data = await userService.getUserData(req.body);
    return res.status(200).send(data);
}

export {
    register,
    login,
    getUserData
}
