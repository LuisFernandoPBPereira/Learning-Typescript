import { Request, Response } from "express"
import EmailService from "../services/EmailService"

//usuários
const users = [
    {
        name: "Luis Fernando P. B. Pereira",
        email: "exemplo@gmail.com"
    },
    
]

export default {
    async index (req: Request, res: Response){
        //retorna a constante dos usuários em um JSON
        return res.json(users)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();
        
        emailService.sendEmail({
            to: {
                name: "Fátima",
                 email: "exemplo2@gmail.com"
            },
            message: {
                subject: "Aprendendo Typescript",
                 body:"Bem-vindo"
            }
        })
        return res.send(emailService)
        //Verifique seu terminal
        
        
    }
}