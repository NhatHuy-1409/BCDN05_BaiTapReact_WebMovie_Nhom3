import { get } from "lodash";
import { http } from "../util/setting/settingAxios";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";

export class QuanLyDatVeServices {

    layDanhSachPhongve = (maLichChieu) => {
        return http.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return http.post('api/QuanLyDatVe/DatVe', thongTinDatVe)
    }
    taoLichChieu = (thongTinLichChieu) => {
        return http.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }

}
export const quanLyDatVeServices = new QuanLyDatVeServices()

