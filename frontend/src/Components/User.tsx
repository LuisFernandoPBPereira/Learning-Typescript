import React from "react"

interface IUser {
    name: string;
    email?: string;
}

interface Props {
    user: IUser;
}

/*
  Aqui, usamos o React.FunctionComponent
  para não excluírmos o children do nosso componente
  sendo assim, ele recebe props com o parâmetro user
  que recebe a interface IUser com os tipos dos dados
  do usuário
*/
const User: React.FunctionComponent<Props> = ({user}) => {
  return(
    <div>
        <strong>Nome:</strong> {user.name} <br/>
        <strong>Nome:</strong> {user.email || "Não possui e-mail"} <br/><br/>
    </div>
  )
}

export default User