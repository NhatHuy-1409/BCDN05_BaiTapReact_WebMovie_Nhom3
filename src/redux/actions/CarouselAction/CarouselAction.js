
import axios, { Axios } from 'axios';
import { quanLyPhimServices } from '../../../services/QuanLyPhimServices';
import { DOMAIN, TOKEN_MOVIE } from '../../../util/setting/setting';
import { SET_CAROUSEL } from '../../types/MovieTypes';

export const getCarouselAction =  () =>{
  return async (dispatch) =>{

    try {
      // const result = await quanLyPhimServices.layDanhSachBanner();
      const result = await quanLyPhimServices.layDanhSachPhim();

      dispatch({
        type: SET_CAROUSEL,
        arrImgCarousel: result.data.content
      })
      // console.log(result.data.content);
    } catch (error) {
      
    }
  }
}