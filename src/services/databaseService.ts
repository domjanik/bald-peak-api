import * as mongodb from 'mongodb';

let MongoClient = mongodb.MongoClient;
let url = "mongodb://localhost:27017/bald-peak";
let connectionOptions = {
    poolSize: 20,
    socketTimeoutMS: 480000
};

const databaseTables = {
    news: 'news'
}

function prepareDB() {
    MongoClient.connect(url, connectionOptions, function (err, db) {
        if (err) throw err;
        console.log('Connected to DB');

        const dbo = db.db("bald-peak");
        const p1 = new Promise((resolve, reject) => {
            let createdDB = 0;
            try {
                const dbToCreate = Object.keys(databaseTables);
                dbToCreate.forEach((db) => {
                    dbo.createCollection(db, function () {
                        console.log('Created test collection');
                        createdDB++;
                        if(createdDB === dbToCreate.length) {
                            resolve();
                        }
                    });
                });
            } catch(error) {
                reject(error);
            }
        });
        p1.then(() => {
            console.log("All DB's are created! ");
            db.close();
        })
    });
}

async function get(filters, dbName) {
    return new Promise((resolve, reject) => {
        try {
            MongoClient.connect(url, connectionOptions, function (err, db) {
                if (err) throw err;
                console.log('Connected to DB');
                const dbo = db.db("bald-peak");
                return dbo.collection(dbName).find(filters).toArray((err, result) => {
                    if (err) throw err;
                    console.log('Got data');
                    resolve(result);
                    db.close();
                });
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function insert(data, dbName) {
    return new Promise((resolve, reject) => {
        try {
            MongoClient.connect(url, connectionOptions, function (err, db) {
                if (err) throw err;
                console.log('Connected to DB');
                const dbo = db.db("bald-peak");
                dbo.collection(dbName).insertOne(data, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    resolve();
                    db.close();
                });
            });
        } catch (error) {
            reject(error);
        }
    });
}

async function remove(filters, dbName) {
    return new Promise((resolve, reject) => {
        try {
            MongoClient.connect(url, connectionOptions, function (err, db) {
                if (err) throw err;
                console.log('Connected to DB');
                const dbo = db.db("bald-peak");
                dbo.collection(dbName).deleteMany(filters, function (err, res) {
                    if (err) throw err;
                    console.log("1 document deleted");
                    resolve();
                    db.close();
                });
            });
        } catch (error) {
            reject(error);
        }
    })
}

async function update(filters, data, dbName) {
    return new Promise((resolve, reject) => {
        try {
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("bald-peak");
                dbo.collection(dbName).updateOne(filters, {$set: data}, function (err, res) {
                    if (err) throw err;
                    console.log("1 document updated");
                    resolve();
                    db.close();
                });
            });
        } catch (error) {
            reject(error)
        }
    })
}

export {
    prepareDB,
    get,
    insert,
    update,
    remove,
    databaseTables
}
