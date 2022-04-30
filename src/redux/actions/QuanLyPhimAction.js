import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import axios, { Axios } from 'axios';
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_FILM } from "../types/QuanLyPhimType"
import { history } from "../../App";



export const layDanhSachPhimAction = (tenPhim = '') => {

  return async (dispatch) => {
    try {
      const result = await quanLyPhimServices.layDanhSachPhim(tenPhim);
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrfilm: result.data.content
      })
    } catch (error) {
      console.log(error);
    }
  }

}
export const themPhimUpLoadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimServices.themPhimUpLoadHinh(formData);
      alert('Thêm thành công');
      console.log('result', result.data.content);
      dispatch(layDanhSachPhimAction())
      history.push('/admin/films');
    } catch (error) {
      console.log(error.response?.data);
    }
  }
}

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimServices.capNhatPhimUpload(formData);
      alert('Cập Nhập thành công');
      console.log('result', result.data.content);
      dispatch(layDanhSachPhimAction())
      history.push('/admin/films');
    } catch (error) {
      console.log(error.response?.data);
    }
  }
}


export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimServices.layThongTinPhim(maPhim);
      console.log('result', result.data.content);
      dispatch({
        type: SET_THONG_TIN_FILM,
        thongTinPhim: result.data.content
      })

    } catch (error) {
      console.log(error.response?.data);
    }
  }
}

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {

    try {
      const result = await quanLyPhimServices.xoaPhim(maPhim);
      console.log('result', result.data.content);
      alert('Xoá phim thành công !');
      dispatch(layDanhSachPhimAction());

    } catch (error) {
      console.log(error);
    }
  }
}

