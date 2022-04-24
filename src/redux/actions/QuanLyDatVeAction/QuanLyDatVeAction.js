import { history } from "../../../App";
import { quanLyDatVeServices } from "../../../services/QuanLyDatVeServices";
import { DAT_VE_ACTION, LAY_DANH_SACH_PHONG_VE_ACTION } from "../../types/QuanLyDatVeType";


export const layDanhSachPhongve = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeServices.layDanhSachPhongve(maLichChieu)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DANH_SACH_PHONG_VE_ACTION,
                    thongTinPhongVe: result.data.content
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const datVe = (thongTinDatVe) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeServices.datVe(thongTinDatVe)
            // history.goBack()
        }
        catch (error) {
            console.log(error);
        }
    }
}