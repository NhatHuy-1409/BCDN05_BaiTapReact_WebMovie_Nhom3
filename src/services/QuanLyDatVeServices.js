import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseServices";

export class QuanLyDatVeServices extends baseService {
    constructor(){
        super()
    }
    layDanhSachPhongve = (maLichChieu) => { 
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
     }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => { 
        return this.post('api/QuanLyDatVe/DatVe',thongTinDatVe)
     }

}
export const quanLyDatVeServices = new QuanLyDatVeServices()

