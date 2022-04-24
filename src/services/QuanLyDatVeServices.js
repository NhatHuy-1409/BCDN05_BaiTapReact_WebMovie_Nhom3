import { http } from "../util/setting/settingAxios";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";

export class QuanLyDatVeServices {

    layDanhSachPhongve = (maLichChieu) => {
        return http.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return http.post('api/QuanLyDatVe/DatVe', thongTinDatVe)
    }

}
export const quanLyDatVeServices = new QuanLyDatVeServices()

