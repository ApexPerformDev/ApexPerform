import { query } from "../database/sqlite.js";

async function Listar (){

    let sql = "select * from user";

    const usuarios = await query(sql);

    return usuarios;
}

async function Inserir (name, email, password, id_role){

    const sqlRole = `SELECT id_role FROM user_role WHERE id_role = ?`;
    const role = await query(sqlRole, [id_role])

    if(!role || role.length === 0){
        throw new Error('Cargo não encontrado');
    }

    let sql = `INSERT INTO user(name, email, password, id_role) values (? , ?, ?, ?) returning id_user`;

    const usuarios = await query(sql, [name, email, password, role[0].id_role]);

    return usuarios[0];
}

async function Editar(id_user, name, email, password, role_name){

    const sqlRole = `SELECT id_role FROM user_role WHERE role_name = ?`;
    const role = await query(sqlRole, [role_name])

    if(!role || role.length === 0){
        throw new Error('Cargo não encontrado');
    }

    let sql = `update user set name=?, email=?, password=?, id_role=? where id_user = ?`;

    await query(sql, [name, email, password, role[0].id_role, id_user]);

    return {id_user};
}

async function Excluir(id_user){

    let sql = `delete from user where id_user=?`;

    await query(sql, [id_user]);

    return {id_user};
}


export default {Listar, Inserir, Editar, Excluir}