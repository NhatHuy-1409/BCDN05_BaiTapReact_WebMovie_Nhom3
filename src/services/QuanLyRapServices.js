import { GROUP_ID } from "../util/setting/setting";
import { http } from "../util/setting/settingAxios";

export class QuanLyRapServices {

    layDanhSachHeThongRap = () => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    }

}
export const quanLyRapServices = new QuanLyRapServices()