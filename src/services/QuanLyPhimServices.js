import { GROUP_ID } from "../util/setting/setting";
import { http } from "../util/setting/settingAxios";

export class QuanLyPhimServices {

    layDanhSachBanner = () => {
        return http.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    layDanhSachPhim = () => {

        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }
}
export const quanLyPhimServices = new QuanLyPhimServices()