import * as dbService from '../services/databaseService';

async function getImage(id) {
    return (await dbService.get({id: Number(id)}, dbService.databaseTables.images))[0];
}

async function getLastId(): Promise<any> {
    return await dbService.getLastId(dbService.databaseTables.news);
}

async function insertImage(image){
    const lastId = await getLastId() + 1;
    await dbService.insert({
        id: lastId,
        imageData: image
    }, dbService.databaseTables.images);
    return lastId;
}

async function removeImage(id) {
    return await dbService.remove({id: Number(id)}, dbService.databaseTables.images);
}

export {
    getImage,
    removeImage,
    insertImage
};
