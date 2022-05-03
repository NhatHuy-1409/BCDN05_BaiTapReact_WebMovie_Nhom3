import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getCarouselAction } from '../../../redux/actions/CarouselAction/CarouselAction';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay } from 'swiper';
import './HomeCarousel.css'
import { history } from '../../../App';
import { Modal } from 'antd';


export default function HomeCarousel(props) {
  // console.log(props);
  let  {trailerUrl , setTrailerUrl} = props
  SwiperCore.use([Autoplay]);
  const { arrImgCarousel } = useSelector(state => state.CarouselReducer)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction())
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
 

  const renderBaner = () => {
    return arrImgCarousel.slice(0, 4).map((item, index) => {
      return <SwiperSlide key={index}>
        {({ isActive }) => (
          <div className='hero-slide__item' style={{ backgroundImage: `url(${item.hinhAnh})` }}>
            <div className='hero-slide__item__content container'>
              <div className="hero-slide__item__content__info">
                <h2 className="title">{item.tenPhim}</h2>
                <div className="overview">{item.moTa}</div>
                <div className='btn-group py-8 mt-4 flex'>

                  <button 
                    className="btn second mr-4"
                    onClick={() => {
                      history.push(`/detail/${item.maPhim}`)
                    }}
                  >Đặt vé</button>
                  <button 
                    className="btn third"
                    onClick={() => {
                      setTrailerUrl(item.trailer)
                      setIsModalVisible(true);
                      
                    }}
                  >Xem Trailer
                  </button>
                </div>
              </div>
              <div className="hero-slide__item__content__poster">
                <img src={item.hinhAnh} alt="" />
              </div>
            </div>
          </div>

        )}
      </SwiperSlide>
    })
  }
 
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    
    <div className="pt-24 ">

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
      // autoplay={{ delay: 3000 }}

      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {
          renderBaner()
        }

      </Swiper>
      <Modal title="Basic Modal" visible={isModalVisible}  onCancel={handleCancel}>
      {/* <iframe width='100%' height='100%' title='trailer' ></iframe> */}
      <iframe src={trailerUrl} width='100%' height='100%' title='trailer' ></iframe>
      </Modal>
    </div >

  )
}
