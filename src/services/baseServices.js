import axios from "axios";
import { DOMAIN,TOKEN,TOKEN_MOVIE } from "../util/setting/setting";
export class baseService {

    put = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'put',
            data: model,
            headers: { 'TokenCybersoft': TOKEN_MOVIE }
        })
    }
    post = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'post',
            data: model,
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN).slice(1,-1) ,'TokenCybersoft': TOKEN_MOVIE }
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(TOKEN)),'TokenCybersoft': TOKEN_MOVIE }
        })
    }

    get = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'get',
            headers: { 'TokenCybersoft': TOKEN_MOVIE }
        })
    }
    delete = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'delete',
            headers: { 'TokenCybersoft': TOKEN_MOVIE }
        })
    }
}