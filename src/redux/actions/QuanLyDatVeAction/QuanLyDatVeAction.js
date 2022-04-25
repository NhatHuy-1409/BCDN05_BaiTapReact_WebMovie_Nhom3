import { history } from "../../../App";
import { quanLyDatVeServices } from "../../../services/QuanLyDatVeServices";
import { CHUYEN_TAB, DAT_VE_ACTION, DAT_VE_HOAN_TAT, LAY_DANH_SACH_PHONG_VE_ACTION } from "../../types/QuanLyDatVeType";
import { hideLoadingAction, playLoadingAction } from "../LoadingAction/LoadingAction";


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
            dispatch(playLoadingAction)
            const result = await quanLyDatVeServices.datVe(thongTinDatVe);
            //Đặt vé thành công load lại trang
            await dispatch(layDanhSachPhongve(thongTinDatVe.maLichChieu)) 
            await dispatch({type:DAT_VE_HOAN_TAT})
            await dispatch({
                type:CHUYEN_TAB,
                tabNumber:'2'
            })
            // history.goBack()
            dispatch(hideLoadingAction)
        }
        catch (error) {
            console.log(error);
        }
    }
}