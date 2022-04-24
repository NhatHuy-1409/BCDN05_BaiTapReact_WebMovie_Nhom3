import React, { useEffect } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';


export default function Home(props) {
  const { arrfilm } = useSelector(state => state.QuanLyPhimReducer);
  const dispatch = useDispatch()
  useEffect(() => {

    const action = layDanhSachPhimAction()
    dispatch(action)
  }, [])
  //  console.log(arrfilm);
  return (
    <div  >

      <section className="text-gray-600 body-font">
        <div className="container py-14 mx-auto">
          <MultipleRowSlick arrfilm={arrfilm} />
          {/* <div className="flex flex-wrap ">
            
          {renderFilm()}

          </div> */}
        </div>
      </section>

      <HomeMenu />
    </div>
  )
}
