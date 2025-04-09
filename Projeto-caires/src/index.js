//Importando framework express
import cors from 'cors';

import express, {request, response} from 'express';
import routes from './routes.js';
const server = express();
server.use(express.json());
server.use(cors())
server.use("/", routes);
server.use(express.urlencoded({extended:true}));
//Definindo porta e mensagem do servidor 
server.listen(3333, ()=>{
    console.log("Server tá on")
});