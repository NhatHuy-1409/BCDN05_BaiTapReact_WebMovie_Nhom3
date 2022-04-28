import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVe, layDanhSachPhongve } from '../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction'
import style from './Checkout.module.css'
import './Checkout.css'
import { CheckOutlined, UserOutlined } from '@ant-design/icons'
import { CHUYEN_TAB, DAT_VE_ACTION } from '../../redux/types/QuanLyDatVeType'
import { Fragment } from 'react'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';
import { layThongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction'
import moment from 'moment'
import imgBgHead from '../../assets/Images/42101_fantasy_superheroes_in_cinema.jpg'
function Checkout(props) {

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhongve(props.match.params.id))
  }, [])

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { chiTietPhongVe, dsGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
  const { danhSachGhe, thongTinPhim } = chiTietPhongVe
  const { maLichChieu, tenCumRap, tenRap, diaChi, tenPhim, hinhAnh, ngayChieu, gioChieu } = thongTinPhim

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = dsGheDangDat.some(gheDD => gheDD === ghe) ? 'gheDangDat' : '';
      let classGheDaDuocDat
      if (ghe.daDat) {
        classGheDaDuocDat = ghe.taiKhoanNguoiDat !== userLogin.taiKhoan ? 'gheDaDuocDat' : ''
      }
      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
          onClick={() => {
            dispatch({
              type: DAT_VE_ACTION,
              ghe: ghe
            })
          }}>
          {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{display:'block',marginTop:'-2px'}}/> : <CheckOutlined style={{display:'block',marginTop:'-2px'}} /> :
            <span style={{display:'block',marginTop:'-4px'}}>{ghe.stt}</span>}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }

  return (
    <div className='min-h-screen' >
      <div className='top-checkout p-4 ssm:p-7 md:p-12' style={{ backgroundImage: `linear-gradient(rgba(0, 0,0, 0.2), rgba(0, 0, 0, 0.2)), url(${imgBgHead}` }
      }>
        <div className="md:grid grid-cols-3 grid-flow-col gap-4 z-10 relative items-end px-0 md:px-8 2md:px-20 	">
          <div className=" ssm:row-span-2 m-auto hidden md:block  ">
            <img src={hinhAnh} className='w-60 h-80 object-cover ' alt="" />
          </div>
          <div className="row-span-1 ssm:col-span-3 mt-24">
            <div className='mb-10 ssm:mb-0'>
              <p className='text-base sm:text-xl opacity-80'>{tenCumRap}</p>
              <p className='text-xl sm:text-3xl font-bold	'>{tenPhim}</p>
            </div>

          </div>
          <div className='row-span-1 col-span-3'>
            <div className="flex text-center ssm:text-left">
              <div className="w-1/3 ">
                <p className='text-base md:text-lg'>Ngày chiếu</p>
                <p className='text-xl md:text-2xl opacity-80'>{ngayChieu}</p>
              </div>
              <div className="w-1/3 ">
                <p className='text-base md:text-lg'>Thời gian</p>
                <p className='text-xl md:text-2xl opacity-80'>{gioChieu}</p>
              </div>
              <div className="w-1/3 ">
                <p className='text-base md:text-lg'>Rạp</p>
                <p className='text-xl md:text-2xl opacity-80'>{tenRap}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 bottom-checkout p-2 ssm:p-4 lg:p-7'>
        <div className='col-span-12 md:col-span-8 lg:col-span-9'>
          <div className='mt-5'>
            <table className="w-full ssm:w-2/3 m-auto text-sm  ">
              <thead>
                <tr>
                  <th><button className='ghe'><span style={{display:'block',marginTop:'-4px'}}>00</span></button></th>
                  <th><button className='ghe gheVip'><span style={{display:'block',marginTop:'-4px'}}>00</span></button></th>
                  <th><button className='ghe gheDangDat'><span style={{display:'block',marginTop:'-4px'}}>00</span></button></th>
                  <th><button className='ghe gheDaDat'><CheckOutlined style={{display:'block',marginTop:'-2px'}} /></button></th>
                  <th><button className='ghe gheDaDuocDat'><UserOutlined style={{display:'block',marginTop:'-2px'}} /></button></th>
                </tr>
              </thead>
              <tbody className=" ssm:text-xs  uppercase ">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế bạn đang đặt</th>
                  <th>Ghế bạn đã đặt</th>
                  <th>Ghế người khác đã đặt</th>
                </tr>
              </tbody>

            </table>
          </div>
          <div className='m-auto'>
            {/* <div className='bg-black w-10/12 h-5 m-auto mt-5'></div> */}
            <div className={`trapezoid m-auto text-center text-white text-lg mt-5`}><span >Màn hình</span></div>
          </div>
          <div className='text-center mt-8'>
            {renderSeats()}
          </div>

        </div>
        <div className='col-span-12 md:col-span-4 lg:col-span-3 text-white p-3 rounded mt-3 mx-auto md:m-auto   w-full ssm:w-3/5  md:w-full' style={{ background: 'radial-gradient(circle, rgba(245,106,117,1) 8%, rgba(165,44,158,1) 97%)', boxShadow: 'rgb(47 43 43 / 80%) 1px 3px 8px 7px' }}>
          <h3 className='text-green-400 text-center text-2xl my-1 ssm:my-2  lg:my-5'>Welcome</h3>
          <hr />
          <h3 className='text-xl mt-5 text-red-600 text-center'>{tenPhim}</h3>
          <p><strong>Địa điểm:</strong>  {tenCumRap}</p>
          <p><strong>Ngày chiếu:</strong> {ngayChieu} - {gioChieu} - {tenRap}</p>
          <hr />
          <div className=" my-5">
            <p className='  text-lg'><strong>Ghế</strong>
              {_.sortBy(dsGheDangDat, ['stt']).map((ghe, index) => {
                console.log(ghe);
                if (ghe.loaiGhe === 'Vip') {
                  return <span key={ghe.maGhe} style={{ color: "#ff0404 " }}> [{ghe.tenGhe}] </span>
                }
                return <span key={ghe.maGhe}> [{ghe.tenGhe}] </span>
              })}
            </p>

          </div>
          <hr />
          <div className=' my-1 ssm:my-2  lg:my-5'>
            <p><strong>Email:</strong>  {userLogin.email}</p>
          </div>
          <div className='my-1 ssm:my-2 lg:my-5'>
            <p><strong>Số điện thoại:</strong> {userLogin.soDT}</p>
          </div>
          <hr />
          <div className='my-1 ssm:my-2 lg:my-5'>
            <p className=' text-yellow-50 text-lg text-right pr-2'>Tổng tiền: <span className=' text-red-600'>
              {
                dsGheDangDat.reduce((tongTien, ghe, index) => {
                  return tongTien += ghe.giaVe
                }, 0)}
            </span>  VNĐ</p>
          </div>
          <div className='mt-5 '>
            <button className='w-full bg-green-500 block py-3 rounded font-bold	' onClick={() => {
              const thongTinDatVe = new ThongTinDatVe()
              thongTinDatVe.maLichChieu = props.match.params.id
              thongTinDatVe.danhSachVe = dsGheDangDat
              dispatch(datVe(thongTinDatVe))
            }}>ĐẶT VÉ</button>
          </div>
        </div>
      </div>
    </div>
  )
}
function KetQuaDatVe() {
  const { thongTinTaiKhoan } = useSelector(state => state.QuanLyNguoiDungReducer)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction())
  }, [])

  const renderTicketItem = () => {
    return thongTinTaiKhoan.thongTinDatVe?.map((ve) => {
      const seats = _.first(ve.danhSachGhe)
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg" style={{ backgroundColor: 'rgb(48 48 48)' }}>
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ve.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">{ve.tenPhim}</h2>
            <p className="text-white">Giờ chiếu: {moment(ve.ngayDat).format('hh:mm A')} - Ngày chiếu: {moment(ve.ngayDat).format('DD-MM-YYYY')}</p>
            <p className="text-white">Địa điểm: {seats.tenHeThongRap} </p>
            <p className="text-white">Tên rạp: {seats.tenCumRap} - ghế: {ve.danhSachGhe.map(ghe => <span>{ghe.tenGhe} </span>)}</p>
          </div>
        </div>
      </div>
    })
  }
  return <section className="text-gray-600 body-font " style={{ background: 'radial-gradient(circle, rgb(93 90 90) 8%, rgb(77 73 73) 97%)' }}>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-500">Lịch sử đặt vé của bạn</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-white">Hãy xem thông tin và thời gian để xem phim vui vẻ bạn nhé !</p>
      </div>
      <div className="flex flex-wrap -m-2">
        {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
              <p className="text-gray-500">UI Designer</p>
            </div>
          </div>
        </div> */}
        {renderTicketItem()}
      </div>
    </div>
  </section>
}


const { TabPane } = Tabs;
export default function (props) {
  const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
  let dispatch = useDispatch()
  return <div className=''>
    <Tabs defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
      dispatch({
        type: CHUYEN_TAB,
        tabNumber: key
      })
    }} >
      <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1" >
        <Checkout {...props} />
      </TabPane>
      <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
        <KetQuaDatVe {...props} />
      </TabPane>
    </Tabs>
  </div>
}





