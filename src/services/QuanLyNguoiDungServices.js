import { GROUP_ID } from "../util/setting/setting";
import { http } from "../util/setting/settingAxios";

export class QuanLyNguoiDungServices {

    dangNhap = (data) => {
        return http.post('api/QuanLyNguoiDung/DangNhap', data)
    }
    dangKy = (data) => {
        return http.post('api/QuanLyNguoiDung/DangKy', data)
    }
    thongTinTaiKhoan = () => {
        return http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    layDanhSachNguoiDung = (maNhom) => {
        return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
    }
    themNguoiDung = (data) => {
        return http.post('/api/QuanLyNguoiDung/ThemNguoiDung', data)
    }
    layThongTinNguoiDung = (taiKhoan) => {
        return http.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
    }
    capNhatThongTinNguoiDung = (data) => {
        return http.post('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
    }
    xoaNguoiDung = (taiKhoan) => {
        return http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }

}
export const quanLyNguoiDungServices = new QuanLyNguoiDungServices()