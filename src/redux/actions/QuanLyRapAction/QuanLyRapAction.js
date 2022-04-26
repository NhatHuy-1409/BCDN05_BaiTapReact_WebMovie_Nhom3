import { quanLyRapServices } from "../../../services/QuanLyRapServices"
import { SET_HE_THONG_RAP_CHIEU } from "../../types/QuanLyRapType";


export const layDanhSachHeThongRapAction = () =>{
  return async dispatch => {
    try {
      const result = await quanLyRapServices.layDanhSachHeThongRap()
      console.log(result.data);
      if(result.status === 200){
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content
        })
      }
    } catch (error) {
        console.log(error);
    }
  }
}