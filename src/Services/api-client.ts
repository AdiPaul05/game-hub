import axios from "axios";

export default axios.create({
    baseURL :"https://api.rawg.io/api",
    params:{
        key:'a58a25ba571c4969bbd7904def52e7e5'
    }
})