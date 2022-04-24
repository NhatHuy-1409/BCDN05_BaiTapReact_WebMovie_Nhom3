import { ThongTinLichChieu } from "../../../_core/models/ThongTinPhongVe"
import {  DAT_VE_ACTION, LAY_DANH_SACH_PHONG_VE_ACTION } from "../../types/QuanLyDatVeType"

const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    dsGheDangDat: [],
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
        default:
            return state
    }
}
