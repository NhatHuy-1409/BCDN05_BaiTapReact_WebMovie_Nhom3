import React, { Component } from "react";
import { useDispatch, useSelector} from "react-redux";

import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/types/QuanLyPhimType";
import Film_Flip from '../Film/Film_Flip'
import styleSlick from './MultipleRowSlick.module.css'
import '../../components/button/button.css'
import '../Modal/modalCustom.scss'
import './multiplerowslick.css'

const MultipleRowSlick = (props) => {
  let  {trailerUrl , setTrailerUrl} = props
  const dispatch = useDispatch()
  const renderFilm = () => {
    return props.arrfilm.slice(0, 8).map((item, index) => {
      return <Film_Flip phim={item} key={index} trailerUrl ={trailerUrl} setTrailerUrl = {setTrailerUrl}/>

    })
  }
  const {dangChieu, sapChieu} = useSelector(state => state.QuanLyPhimReducer);
  let activeClassDC = dangChieu === true ? 'active_Film' :'non_active_Film'
  let activeClassSC = sapChieu === true ? 'active_Film' :'non_active_Film'

  return (
    <div>

      <div className="img__cross pb-8">
      <img src='./Images/moviefilm-01.png' alt="" className='w-full h-32 ' />
      </div>
      <button
        className= {`${styleSlick[activeClassDC]}  mr-8 px-8 py-3 font-semibold border rounded  hover:text-white background-hover`}
    
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action)
          // console.log(props.arrfilm);
        }}
      >Đang Chiếu</button>
      <button
        className= {`${styleSlick[activeClassSC]} px-8 py-3 font-semibold border rounded  hover:text-white background-hover`}
    
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action)
          // console.log(props.arrfilm);
        }}
      >Sắp Chiếu</button>

      <div className="grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 gap-9 mt-4  ">
      {renderFilm()}
      </div>
    </div>
  );
}


export default MultipleRowSlick;