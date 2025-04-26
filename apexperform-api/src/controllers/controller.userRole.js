import servicesUserRole from "../services/services.userRole.js";

async function ListarUserRole(req, res){
    const userRole = await servicesUserRole.Listar()
    
    res.status(200).json(userRole)

    
}

async function InserirUserRole (req, res){

    const {role_name} = req.body;

    if(!role_name){
        return res.status(400).json({ error: "Todos os campos são obrigatórios"})
    }

    const userRole = await servicesUserRole.Inserir(role_name)

    res.status(201).json(userRole)
}

export default {ListarUserRole, InserirUserRole}