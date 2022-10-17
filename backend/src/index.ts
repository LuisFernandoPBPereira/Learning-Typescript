//Devemos importar os tipos do express para
//reconhecer seus parâmetros

/*
yarn tsc --init -> faz com que não precisamos importar
o express como "import * as express from 'express';"
por conta do esModuleInterop: true no tsconfig.json,
a exportação se torna default.
*/

import express from "express"
import cors from "cors"
import routes from "./routes"

//Inicia o Express
const app = express();

//Cors permite que URL's acessem o backend
app.use(cors())

//Rotas
app.use(routes)

//Porta do servidor
app.listen(3333);