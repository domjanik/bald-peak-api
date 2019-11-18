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

async function login(userData) {
    return await dbService.get({
        userLogin: userData.login,
        password: userData.passwordHash
    }, dbService.databaseTables.users);
}

export {
    getUserByLogin,
    register,
    login,
    getUserData
};
