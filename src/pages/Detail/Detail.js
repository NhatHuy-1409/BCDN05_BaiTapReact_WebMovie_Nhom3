import React, { useEffect, useState } from 'react';
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import '../../assets/circle.css';
import style from './Detail.module.css'
import { Tabs, Radio, Space, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
import { SET_CHI_TIET_PHIM } from '../../redux/types/QuanLyRapType';
import { layThongTinLichChieuPhim } from '../../redux/actions/QuanLyRapAction/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

export default function Detail(props) {
     const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
     console.log({ filmDetail })
     console.log(props);
     const dispatch = useDispatch();
     useEffect(() => {
          let { id } = props.match.params;
          dispatch(layThongTinLichChieuPhim(id))
     }, [])
     return (
          <div style={{ backgroundImage: `url(${filmDetail.hinhAnh}) `, backgroundSize: '100%', backgroundPosition: 'cover', minHeight: '100vh', }}>
               <CustomCard
                    style={{ paddingTop: 150, minHeight: '100vh' }}
                    effectColor="fff" // required
                    color="fff" // default color is white
                    blur={10} // default blur value is 10px
                    borderRadius={-10} // default border radius value is 10px
               >
                    <div className="grid grid-cols-12">
                         <div className="col-span-4 col-start-4">
                              <div className=" grid grid-cols-2">
                                   <img src={filmDetail.hinhAnh} alt="" />
                                   <div style={{ marginTop: '30%' }}>
                                        <p> Ngày Chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                        <p className='text-2xl'>{filmDetail.tenPhim}</p>
                                        <p>{filmDetail.moTa}</p>
                                   </div>
                              </div>

                         </div>
                         <div className="col-span-5">
                              <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }}></Rate></h1>
                              <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                                   <span>{filmDetail.danhGia * 10}%</span>
                                   <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                   </div>

                              </div>
                         </div>
                    </div>
                    <div className='m-20 ml-72 w-2/3 container px-20 py20'>
                         <Tabs defaultActiveKey="1" centered>
                              <TabPane tab="Lịch chiếu" key="1">
                                   <Tabs tabPosition={'left'}>
                                        {filmDetail.heThongRapChieu?.map((htr, index) => {
                                             return <TabPane tab={
                                                  <div className='flex flex-row items-center justify-center '>
                                                       <img src={htr.logo} className="rounded-full mr-2" width={50} height={50} alt="" />{htr.tenHeThongRap}
                                                  </div>} key={index}>
                                                  {htr.cumRapChieu?.map((cumrap, index) => {
                                                       return <div key={index}>
                                                            <div className="flex flex-row">
                                                                 <img style={{ width: 60, height: 60 }} src="https://movienew.cybersoft.edu.vn/hinhanh/fantasticfour.jpg" alt="" />
                                                                 <div className="ml-2">
                                                                      <p style={{ fontSize: 20, lineHeight: 1 }}>{cumrap.tenCumRap}</p>
                                                                      <p className='text-gray-400' style={{ marginTop: -10 }}>{cumrap.tenCumRap}</p>
                                                                 </div>

                                                            </div>
                                                            <div className="thong-tin-lich-chieu grid grid-cols-4 text-white">
                                                                 {cumrap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                      return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="col-span-1" key={index}>
                                                                           {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                      </NavLink>
                                                                 })}
                                                            </div>
                                                       </div>
                                                  })}
                                             </TabPane>
                                        })}
                                   </Tabs>
                              </TabPane>
                              <TabPane tab="Thông tin" key="2">
                                   Thông tin
                              </TabPane>
                              <TabPane tab="Đánh giá" key="3">
                                   Đánh giá
                              </TabPane>
                         </Tabs>
                    </div>

               </CustomCard >

          </div >
     )
}


