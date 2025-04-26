import repositoryRole from "../repository/repository.role.js";
import repositoryUser from "../repository/repository.user.js";

async function Listar (){
    const usuarios = await repositoryUser.Listar();

    return usuarios;
}

async function Inserir (name, email, password, id_role){
    const role = await repositoryRole.getName(id_role);
    console.log(role, "AQUI É O ERRO FDP")
    // if(!role){
    //     throw new Error("Cargo não encontrado");
    // }

    const newUser = await repositoryUser.Inserir(name, email, password, role);

    return newUser;
}

async function Editar (id_user, name, email, password, role_name){
    const role = await repositoryRole.getName(role_name);
    if(!role){
        throw new Error("Cargo não encontrado");
    }

    const updateUser = await repositoryUser.Editar(name, email, password, role.id_user);

    return updateUser;
}

async function Excluir (id_user){
    const deleteUser = await repositoryuser.Excluir(id_user);

    return deleteUser;
}



export default {Listar, Inserir, Editar, Excluir}