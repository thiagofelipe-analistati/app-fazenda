import axios  from "axios";

const api = axios.create({
    baseURL : "https://app-fazenda.herokuapp.com"
})
 
export default api;