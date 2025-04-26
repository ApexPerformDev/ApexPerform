import sqlite3 from "sqlite3";

const SQLite = sqlite3.verbose()

let db = null;

function connectDB(){
    if(!db){
        db = new SQLite.Database("./src/database/banco.db", SQLite.OPEN_READWRITE, (err) => {
            if (err) console.log("Erro ao se conectar" + err.message);
        })
    }

    return db;
}



function query(command, params = [], method='all'){
    return new Promise((resolve, reject) => {
        const database = connectDB();
        database[method](command, params, function(error, result) {
            if (error)
                reject(error)
            else
                resolve(result);
        })
    })
}

export {connectDB , query}