import { history } from "../../../App"
import { quanLyNguoiDungServices } from "../../../services/QuanLyNguoiDungServices"

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

export const dangNhap = (user) => {
    return (dispatch2) => {
        let promise = quanLyNguoiDungServices.dangNhap(user)
        promise.then(() => {
            alert('You have succesfully signed in our website.');
            history.push('/register')
        })
        promise.catch((error) => {
            alert('Sign in request failed.');
            console.log(error);
        })
    }
}