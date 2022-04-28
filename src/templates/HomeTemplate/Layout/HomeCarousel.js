import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { quanLyPhimServices } from '../../../services/QuanLyPhimServices';
import axios, { Axios } from 'axios';
import { getCarouselAction } from '../../../redux/actions/CarouselAction/CarouselAction';
import { SET_CAROUSEL } from '../../../redux/types/MovieTypes';
import { TOKEN_MOVIE } from '../../../util/setting/setting';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper';
import './HomeCarousel.css'
import { history } from '../../../App';




export default function HomeCarousel(props) {
  SwiperCore.use([Autoplay]);
  const { arrImgCarousel } = useSelector(state => state.CarouselReducer)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction())
  }, [])


  const renderBaner = () => {
    return arrImgCarousel.slice(0,4).map((item, index) => {
      return <SwiperSlide key={index}>
        {({ isActive }) => (
          <div className='hero-slide__item' style={{backgroundImage: `url(${item.hinhAnh})`}}>
            <div className='hero-slide__item__content container'>
            <div className="hero-slide__item__content__info">
            <h2 className="title">{item.tenPhim}</h2>
            <div className="overview">{item.moTa}</div>
            <div className='btn-group py-8 mt-4 flex'>
            <button  
              className="btn second mr-4" 
              onClick={() =>{
                history.push(`/detail/${item.maPhim}`)
              }}
              >Đặt vé</button>
            <button  
              className="btn third"
              
            >Xem Trailer</button>

            </div>
            </div>
            <div className="hero-slide__item__content__poster">
              <img src={item.hinhAnh} alt=""  />
            </div>
            </div>
          </div>
        

        )}
      </SwiperSlide>
    })
  }

  console.log(arrImgCarousel);
  return (
    <div className="pt-24 pb-10">

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
 
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          renderBaner()
        }


      </Swiper>
    </div >

  )
}
