import repositoryRole from "../repository/repository.role.js";


async function Listar() {
    const userRole = await repositoryRole.Listar();

    return userRole;
    
}

async function Inserir (role_name){
    const newUserRole = await repositoryRole.Inserir(role_name);

    return newUserRole;
}

async function Editar (id_role, role_name){
    const role = await repositoryRole.getName(role_name);
    if(!role){
        throw new Error("Cargo não encontrado");
    }

    const updateUserRole = await repositoryRole.Editar(id_role, role_name)

}
// async function Editar (id_user, name, email, password, role_name){
//     const role = await repositoryRole.getName(role_name);
//     if(!role){
//         throw new Error("Cargo não encontrado");
//     }

//     const updateUser = await repositoryUser.Editar(name, email, password, role.id_user);

//     return updateUser;
// }

// async function Excluir (id_user){
//     const deleteUser = await repositoryuser.Excluir(id_user);

//     return deleteUser;
// }



export default {Listar, Inserir}