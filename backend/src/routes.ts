import { Router } from "express";
import UserController from "./controllers/UserController";

//inicia as rotas
const routes = Router();

//Rota para os usuários
routes.get("/users", UserController.index);
routes.get("/email", UserController.create);

export default routes
  