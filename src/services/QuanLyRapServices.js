import { GROUP_ID } from "../util/setting/setting";
import { http } from "../util/setting/settingAxios";

export class QuanLyRapServices {

    layDanhSachHeThongRap = () => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    }

    layThongTinHeThongRap = () => {
        return http.get(`/api/QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRap = (maHeThongRap) => {
        return http.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }

}
export const quanLyRapServices = new QuanLyRapServices()