import {useEffect, useState} from "react"
import api from "./services/api";
import User from "./Components/User"

//Tipagem dos dados do usuário, vindos do backend
interface IUser {
  name: string;
  email?: string;
}

function App() {
  //O useState recebe a interface para poder interpretar
  //qual é o tipo do estado que está sendo armazenado
  const [users, setUsers] = useState<IUser[]>([])

  //Carrega a api da rota users quando o componente for carregado
  useEffect(() => {
    //Realizamos a chamada da interface <IUser[]> neste formato
    //por estarmos tratando com mais de um dado, e aqui tipamos 
    //eles e colocamos dentro de um array
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  //Retornamos em tela o nome e email do usuário
  return (
    <div className="App">
      {users.map(user => <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
