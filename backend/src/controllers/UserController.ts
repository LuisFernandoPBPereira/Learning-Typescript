const users = [
    {name: "Luis Fernando P. B. Pereira", email: "exemplo@gmail.com"}
]

export default {
    async index (req: Request, res: Response){
        return res.json(users)
    }
}