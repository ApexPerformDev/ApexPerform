import servicesUser from "../services/services.user.js";

async function Listar (req, res){

    const usuarios = await servicesUser.Listar()

    res.status(200).json(usuarios)
}

async function Inserir (req, res){

    const {name, email, password, id_role} = req.body;
    console.log(req.body)

    if(!name || !email || !password || !id_role){
        return res.status(400).json({ error: "Todos os campos são obrigatórios"})
    }

    const usuario = await servicesUser.Inserir(name, email, password, id_role)

    res.status(201).json(usuario)
}

async function Editar (req, res){

    const id_user = req.params.id_user;
    const {name, email, password, role_name} = req.body;

    const updateUser = await servicesUser.Editar(id_user, name, email, password, role_name);

    res.status(201).json(updateUser)
}

async function Excluir (req, res){

    const id_user = req.params.id_user;

    const deleteUser = await servicesUser.Excluir(id_user)

    res.status(201).json(deleteUser)
}

export default {Listar, Inserir, Editar, Excluir}