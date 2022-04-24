import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'antd';
import { quanLyPhimServices } from '../../../services/QuanLyPhimServices';
import axios, { Axios } from 'axios';
import { getCarouselAction } from '../../../redux/actions/CarouselAction/CarouselAction';
import { SET_CAROUSEL } from '../../../redux/types/MovieTypes';
import { TOKEN_MOVIE } from '../../../util/setting/setting';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition:'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};
export default function HomeCarousel(props) {
  const {arrImgCarousel} = useSelector(state => state.CarouselReducer)
  const dispatch = useDispatch();


  useEffect( () => {
    
      // const result = await quanLyPhimServices.layDanhSachBanner();

    dispatch(getCarouselAction())
  
  }, [])


  const renderCarousel = () => {
    return arrImgCarousel.map((item, index) =>{
      return <div key={index} >
      <div style={{...contentStyle, backgroundImage:`url(${item.hinhAnh})`}} >
      <img src={item.hinhAnh} className=' opacity-0' alt="" />
      </div>
    </div>
    })
  }
  return (
    <div className="pt-24 pb-10">

    <Carousel autoplay style={{position:'relative',zIndex:1}} >
    {renderCarousel()}
    
    
    </Carousel>
    </div>

  )
}
