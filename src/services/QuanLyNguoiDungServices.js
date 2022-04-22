import { baseService } from "./baseServices";

export class QuanLyNguoiDungServices extends baseService {
    constructor(){
        super()
    }
    dangNhap = (data) => { 
        return this.post('api/QuanLyNguoiDung/DangNhap',data)
     }
    dangKy = (data) => { 
        return this.post('api/QuanLyNguoiDung/DangKy',data)
     }

}
export const quanLyNguoiDungServices = new QuanLyNguoiDungServices()