import extRequest from '../models/extenderRequestModel';
import * as express from 'express';
import * as imageService from '../services/imageService'

async function getImage(req: extRequest, res: express.Response) {
    let data = await imageService.getImage(req.params.id);
    return res.status(200).send(data);
}

async function removeImage(req: extRequest, res: express.Response) {
    let data = await imageService.removeImage(req.params.id);
    return res.status(200).send(data);
}

export {
    getImage,
    removeImage
}
