import React, { useEffect } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction/QuanLyRapAction';


export default function Home(props) {
  const { arrfilm } = useSelector(state => state.QuanLyPhimReducer);
  const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer)

  const dispatch = useDispatch()
  useEffect(() => {

    const action = layDanhSachPhimAction();
    dispatch(action);
    dispatch(layDanhSachHeThongRapAction());
  }, [])
  //  console.log(arrfilm);
  return (
    <div  >

      <section className="text-gray-600 body-font">
        <div className="container pb-8 mx-auto">
          <MultipleRowSlick arrfilm={arrfilm} />
          {/* <div className="flex flex-wrap ">
            
          {renderFilm()}

          </div> */}
        </div>
      </section>

      <HomeMenu heThongRapChieu={heThongRapChieu}/>
    </div>
  )
}
