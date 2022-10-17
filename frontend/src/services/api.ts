import axios from "axios";

//O axios aqui, consome o backend
const api = axios.create({
    baseURL: "http://localhost:3333"
})

export default api