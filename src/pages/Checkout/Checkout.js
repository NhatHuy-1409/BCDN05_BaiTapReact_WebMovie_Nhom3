import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVe, layDanhSachPhongve } from '../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction'
import style from './Checkout.module.css'
import './Checkout.css'
import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import { DAT_VE_ACTION } from '../../redux/types/QuanLyDatVeType'
import { Fragment } from 'react'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';
import { layThongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction'
import moment from 'moment'
function Checkout(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { chiTietPhongVe, dsGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhongve(props.match.params.id))
  }, [])
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
          {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined className='mb-2' /> : <CloseOutlined className='mb-2 ' /> : <span className='mb-2'>{ghe.stt}</span>}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>

    })
  }

  return (

    <div className='min-h-screen'>
      <div className='grid grid-cols-12 '>
        <div className='col-span-9'>
          <div className='m-auto'>
            <div className='bg-black w-10/12 h-5 m-auto mt-5'></div>
            <div className={`${style['trapezoid']} m-auto text-center text-white text-lg`}><span >Màn hình</span></div>
          </div>
          <div className='text-center mt-8'>
            {renderSeats()}
          </div>
          <div className='mt-5'>
            <table className="w-2/3 m-auto text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế người khác đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><button className='ghe'>00</button></th>
                  <th><button className='ghe gheDangDat'>00</button></th>
                  <th><button className='ghe gheVip'>00</button></th>
                  <th><button className='ghe gheDaDat'>00</button></th>
                  <th><button className='ghe gheDaDuocDat'><UserOutlined className='mb-2' /></button></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-span-3'>
          <h3 className='text-green-400 text-center text-2xl my-5'>0 đ</h3>
          <hr />
          <h3 className='text-xl mt-5'>{tenPhim}</h3>
          <p><strong>Địa điểm:</strong>  {tenCumRap}</p>
          <p><strong>Ngày chiếu:</strong> {ngayChieu} - {gioChieu} - {tenRap}</p>
          <hr />
          <div className="flex my-5">
            <p className='w-4/5  text-lg'><strong>Ghế</strong>
              {_.sortBy(dsGheDangDat, ['stt']).map((ghe, index) => {
                if (index > 0) {
                  return <span key={ghe.maGhe}> - {ghe.tenGhe}</span>
                }
                return <span key={ghe.maGhe}> {ghe.tenGhe}</span>
              })}
            </p>
            <p className='w-1/5 text-green-800 text-lg text-right pr-2'>{

              dsGheDangDat.reduce((tongTien, ghe, index) => {
                return tongTien += ghe.giaVe
              }, 0)} VNĐ</p>
          </div>
          <hr />
          <div className='my-5'>
            <p><strong>Email:</strong>  {userLogin.email}</p>
          </div>
          <div className='my-5'>
            <p><strong>Số điện thoại:</strong> {userLogin.soDT}</p>
          </div>
          <hr />

          <div className='mb-0 '>
            <button className='w-full bg-green-500 block' onClick={() => {
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
  console.log(thongTinTaiKhoan);

  const renderTicketItem = () => {
    return thongTinTaiKhoan.thongTinDatVe?.map((ve) => {
      const seats = _.first(ve.danhSachGhe)
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ve.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{ve.tenPhim}</h2>
            <p className="text-gray-500">Giờ chiếu:{ moment(ve.ngayDat).format('hh:mm A')} - Ngày chiếu:{moment(ve.ngayDat).format('DD-MM-YYYY')}</p>
            <p>Địa điểm: {seats.tenHeThongRap} </p>
            <p>Tên rạp: {seats.tenCumRap} - ghế: {ve.danhSachGhe.map(ghe => <span>{ghe.tenGhe} </span>)}</p>
          </div>
        </div>
      </div>
    })
  }
  return <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900">Lịch sử đặt vé của bạn</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin và thời gian để xem phim vui vẻ bạn nhé !</p>
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

function callback(key) {
  console.log(key);
}
export default function (props) {
  return <div className='p-5'>
    <Tabs defaultActiveKey="1" onChange={callback} >
      <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
        <Checkout {...props} />
      </TabPane>
      <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
        <KetQuaDatVe {...props} />
      </TabPane>
    </Tabs>
  </div>
}





