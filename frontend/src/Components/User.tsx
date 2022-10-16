import React from "react"

interface IUser {
    name: string;
    email?: string;
}

interface Props {
    user: IUser;
}


const User: React.FC<Props> = ({user}) => {
  return(
    <div>
        <strong>Nome:</strong> {user.name} <br/>
        <strong>Nome:</strong> {user.email || "Não possui e-mail"} <br/>
    </div>
  )
}

export default User