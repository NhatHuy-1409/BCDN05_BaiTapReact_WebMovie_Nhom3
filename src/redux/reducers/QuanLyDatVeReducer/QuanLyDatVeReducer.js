import { ThongTinLichChieu } from "../../../_core/models/ThongTinPhongVe"
import { CHUYEN_TAB, DAT_VE_ACTION, DAT_VE_HOAN_TAT, LAY_DANH_SACH_PHONG_VE_ACTION } from "../../types/QuanLyDatVeType"

const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    dsGheDangDat: [],
    tabActive : '1',
}

export default (state = stateDefault, action) => {
    switch (action.type) {

        case LAY_DANH_SACH_PHONG_VE_ACTION:
            state.chiTietPhongVe = action.thongTinPhongVe
            return { ...state }
        case DAT_VE_ACTION:
            if (!state.dsGheDangDat.some(ghe => ghe === action.ghe)) {
                state.dsGheDangDat = [...state.dsGheDangDat, action.ghe]
            } else {
                let newDSGheDangDat = state.dsGheDangDat.filter(ghe => ghe !== action.ghe)
                state.dsGheDangDat = newDSGheDangDat
            }
            return { ...state }
        case DAT_VE_HOAN_TAT:
            state.dsGheDangDat = []
            return { ...state }
        case CHUYEN_TAB:     
            state.tabActive = action.tabNumber
            return { ...state }
        default:
            return state
    }
}
