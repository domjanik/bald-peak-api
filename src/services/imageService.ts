import * as dbService from '../services/databaseService';

async function getImage(id) {
    return (await dbService.get({id: Number(id)}, dbService.databaseTables.images))[0];
}

async function getLastId(): Promise<any> {
    return await dbService.getLastId(dbService.databaseTables.news);
}

async function insertImage(image){
    const lastId = await getLastId();
    await dbService.insert({
        id: lastId,
        imageData: image
    }, dbService.databaseTables.images);
    return lastId;
}
export {
    getImage,
    insertImage
};
