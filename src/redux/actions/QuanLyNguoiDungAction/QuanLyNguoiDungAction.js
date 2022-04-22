import { history } from "../../../App"
import { quanLyNguoiDungServices } from "../../../services/QuanLyNguoiDungServices"
import { DANG_NHAP_ACTION } from "../../types/QuanLyNguoiDungtype"

export const dangKy = (infoUser) => {
    return (dispatch2) => {
        let promise = quanLyNguoiDungServices.dangKy(infoUser)
        promise.then(() => {
            alert('You registered successfully.');
            history.push('/login')
        })
        promise.catch((error) => {
            console.log(error);
        })
    }
}

export const dangNhap = (infoLogin) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungServices.dangNhap(infoLogin)
            if(result.data.statusCode === 200){
                dispatch({
                    type:DANG_NHAP_ACTION,
                    thongtinDangNhap: result.data.content
                })
                history.goBack()//chuyển hướng về trang trước đó
            }
        }
        catch(error){
            console.log(error);
        }
    }
}
// export const dangNhap = (user) => {
//     return (dispatch2) => {
//         let promise = quanLyNguoiDungServices.dangNhap(user)
//         promise.then(() => {
//             alert('You have succesfully signed in our website.');
//             history.push('/home')
//         })
//         promise.catch((error) => {
//             alert('Sign in request failed.');
//             console.log(error);
//         })
//     }
// }