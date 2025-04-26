import { query } from "../database/sqlite.js";

async function getName(id_role) {
    const sql = `SELECT * FROM user_role where id_role = ?`

    const result = await query(sql, [id_role], "get");
    console.log(result)

    if (result) {
        return result.id_role;;
    }

    return null
}

async function Inserir (role_name){

    let sql = `INSERT INTO user_role(role_name) values (?)`;

    const userRole = await query(sql, [role_name], "run");

    return userRole;
}

async function Listar() {
    let sql = "select * from user_role"

    const userRole = await query(sql);
    
    return userRole;

   
}

export default {getName, Inserir, Listar}
