//Tipagens do email para uma pessoa
interface IMailTo {
    name: string;
    email: string;
}

//Tipagens da mensagem
interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

//DTO = Data Transfer Object (DDD)

//interface de transferência de dados da funcão sendEmail
interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

//interface da classe EmailService para a função sendEmail
interface IEmailService {
    sendEmail(request: IMessageDTO): void
}

class EmailService implements IEmailService {
    sendEmail({to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
        
    }
}

export default EmailService;