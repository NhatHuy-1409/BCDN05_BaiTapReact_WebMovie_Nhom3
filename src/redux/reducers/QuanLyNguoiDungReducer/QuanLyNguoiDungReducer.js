import { TOKEN, USER_LOGIN } from "../../../util/setting/setting"
import { DANG_NHAP_ACTION } from "../../types/QuanLyNguoiDungtype"
import { history } from "../../../App";

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user
}

export default (state = stateDefault, action) => {
    switch (action.type) {

        case DANG_NHAP_ACTION:
            const { thongtinDangNhap } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongtinDangNhap))
            localStorage.setItem(TOKEN, JSON.stringify(thongtinDangNhap.accessToken))
      
            return { ...state, userLogin: thongtinDangNhap }

        default:
            return { ...state }
    }
}
