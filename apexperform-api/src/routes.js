import { Router } from "express";
import controllerUser from "./controllers/controller.user.js";
import controllerUserRole from "./controllers/controller.userRole.js";

const router = Router();

router.get("/user", controllerUser.Listar);

router.post("/user", controllerUser.Inserir);

router.put("/user/:id_user", controllerUser.Editar);

router.delete("/user/:id_user", controllerUser.Excluir);

router.get("/user_role", controllerUserRole.ListarUserRole);

router.post("/user_role", controllerUserRole.InserirUserRole);

export default router;