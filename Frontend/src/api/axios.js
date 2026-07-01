import axios from "axios"

const api = axios.create({
    baseURL: "https://job-tracker-fhru.onrender.com/api"
})

export default api