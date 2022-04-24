import axios from "axios"
import { DOMAIN, TOKEN, TOKEN_MOVIE } from "./setting"


export const http = axios.create({
    baseURL:DOMAIN,
    timeout:30000
})
http.interceptors.request.use((config) => { 
    config.headers = {
        ...config.headers,
        'TokenCybersoft': TOKEN_MOVIE ,
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(TOKEN))
    }
    return config
 }, (errors)=>{
     return Promise.reject(errors)
 })