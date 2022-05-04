import { history } from "../../../App"
import { quanLyNguoiDungServices } from "../../../services/QuanLyNguoiDungServices"
import { DANG_NHAP_ACTION, DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_TAI_KHOAN_ACTION, THONG_TIN_NGUOI_DUNG } from "../../types/QuanLyNguoiDungtype"
import { message} from 'antd';

export const dangKy = (infoUser) => {
    return (dispatch2) => {
        let promise = quanLyNguoiDungServices.dangKy(infoUser)
        promise.then(() => {
            message.success('You registered successfully.');
            history.push('/login')
        })
        promise.catch((error) => {
            console.log(error);
        })
    }
}

export const dangNhap = (infoLogin) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.dangNhap(infoLogin)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongtinDangNhap: result.data.content
                })
                message.success('You have succesfully signed in our website.')
                history.goBack()//chuyển hướng về trang trước đó
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const layThongTinTaiKhoanAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.thongTinTaiKhoan()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_TAI_KHOAN_ACTION,
                    thongTinTaiKhoan: result.data.content
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const layDanhSachNguoiDungAction = (maNhom) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.layDanhSachNguoiDung(maNhom)
            // console.log("a", result.data.content)
            dispatch({
                type: DANH_SACH_NGUOI_DUNG,
                danhSachNguoiDung: result.data.content
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const layThongTinNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.layThongTinNguoiDung(taiKhoan)
            console.log("ahhhh", result.data.content)
            dispatch({
                type: THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDung: result.data.content
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungServices.xoaNguoiDung(taiKhoan)
            console.log(result)
            console.log('aaaaaaaaaaa', result.data.content);
            alert('Xoá Tài khoản thành công !');
            dispatch(layDanhSachNguoiDungAction());
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const themNguoiDungAction = (infoUser) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungServices.themNguoiDung(infoUser);
            alert('Thêm thành công');
            console.log('result', result.data.content);
            dispatch(layDanhSachNguoiDungAction())
            history.push('/admin/user');
        } catch (error) {
            console.log(error.response?.data);
        }
    }
}

export const capNhatThongTinNguoiDungAction = (infoUser) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungServices.capNhatThongTinNguoiDung(infoUser);
            alert('Cập Nhập thành công');
            console.log('result', result.data.content);
            dispatch(layDanhSachNguoiDungAction())
            history.push('/admin/user');
        } catch (error) {
            console.log(error.response?.data);
        }
    }
}