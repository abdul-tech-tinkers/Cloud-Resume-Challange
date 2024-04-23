import axios from "axios"

const axoisInstance = axios.create({
    baseURL:"http://localhost:7071/api"
})

export default axoisInstance;