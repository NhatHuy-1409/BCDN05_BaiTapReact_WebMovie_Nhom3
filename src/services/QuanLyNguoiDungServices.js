import { http } from "../util/setting/settingAxios";

export class QuanLyNguoiDungServices  {

    dangNhap = (data) => {
        return http.post('api/QuanLyNguoiDung/DangNhap', data)
    }
    dangKy = (data) => {
        return http.post('api/QuanLyNguoiDung/DangKy', data)
    }
    thongTinTaiKhoan = () => {
        return http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }


}
export const quanLyNguoiDungServices = new QuanLyNguoiDungServices()