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

 //interceptors là 1 cái hàm chặn (bức tường kiểm tra) trước khi request hoặc response => dùng cho mọi phương thức API
 //=> thay vài tạo các thông tin kiểm tra cho từng phương thức (như ở base serivces)  thì mình thêm thông tin kiểm tra vào đẩy là có thể sử dụng cho mọi phương thức

 //Khi nào dùng interceptors.response : giả sử bạn có thông tin hợp lệ và đã request được API nhưng có những thông tin ko được phép truy cập thì có thể xử lý ở đây 

//  interceptors.request : xử lý trước khi gửi
//  interceptors.response : xử lý trước khi trả