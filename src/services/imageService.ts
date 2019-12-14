import * as dbService from '../services/databaseService';

async function getImage(id) {
    return (await dbService.get({id: Number(id)}, dbService.databaseTables.images))[0];
}

export {
    getImage
};
