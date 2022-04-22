import React, { Component } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import Film from '../../components/Film/Film';
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/types/QuanLyPhimType";
import Film_Flip from '../Film/Film_Flip'
import styleSlick from './MultipleRowSlick.module.css'





const MultipleRowSlick = (props) => {
  const dispatch = useDispatch()
   const renderFilm = () => {
    return props.arrfilm.slice(0, 12).map((item, index) => {
      return <div key={index} className='mt-8 ' >

        <Film_Flip phim={item} />
        {/* <Film phim={item}/> */}
        {/* <Film_Flip/> */}
      </div>

    })
  }

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} ${styleSlick['slick-next']}`}
          style={{ ...style, display: "block", }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} ${styleSlick['slick-prev']}`}
          style={{ ...style, display: "block", }}
          onClick={onClick}
        />
      );
    }
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,

    };
    return (
      <div>
        <button 
          className="mr-8 px-8 py-3 font-semibold border rounded dark:border-coolGray-100 dark:text-coolGray-100 hover:text-white hover:bg-indigo-700"
          onClick={() =>{
            const action = {type: SET_FILM_DANG_CHIEU};
            dispatch(action)
            console.log(props.arrfilm);
          }}
        >Đang Chiếu</button>
        <button 
          className="px-8 py-3 font-semibold border rounded dark:border-coolGray-100 dark:text-coolGray-100 hover:text-white hover:bg-indigo-700"
          onClick={() =>{
            const action = {type: SET_FILM_SAP_CHIEU};
            dispatch(action)
            console.log(props.arrfilm);
          }}
        >Sắp Chiếu</button>

        <Slider {...settings}>
          {renderFilm()}




        </Slider>
      </div>
    );
  }


export default MultipleRowSlick;