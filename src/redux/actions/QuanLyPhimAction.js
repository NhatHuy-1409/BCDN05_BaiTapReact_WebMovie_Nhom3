import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import axios, { Axios } from 'axios';
import { SET_DANH_SACH_PHIM } from "../types/QuanLyPhimType"


export const layDanhSachPhimAction = () => { 

  return  async (dispatch)=> { 
    try {
        const result = await quanLyPhimServices.layDanhSachPhim();
        dispatch({
          type:SET_DANH_SACH_PHIM,
          arrfilm: result.data.content
        })
    } catch (error) {
      console.log(error);
    }
   }

 }