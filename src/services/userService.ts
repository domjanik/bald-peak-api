import * as dbService from "./databaseService";

async function getUserData(id) {
    return await dbService.get({id}, dbService.databaseTables.users);
}

async function register(userData) {
    return await dbService.insert(userData, dbService.databaseTables.users);
}

async function getUserByLogin(userName): Promise<any[]> {
    return await dbService.get({userName}, dbService.databaseTables.users);
}
export {
    getUserByLogin,
    register,
    getUserData
};
