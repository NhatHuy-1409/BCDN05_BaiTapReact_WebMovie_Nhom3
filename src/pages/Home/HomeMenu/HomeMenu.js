import React, { Fragment, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom'
import moment from 'moment';
import './homemenu.css'


const { TabPane } = Tabs;


export default class HomeMenu extends React.PureComponent {
  // console.log(props);
  // const [state, setState] = useState({
  //   tabPosition: 'left',
  // })
  // const { tabPosition } = state;
  state = {
    tabPosition: 'left',
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };
  // componentDidMount(){
  // }
  renderHeThongRap = () => {

    let { tabPosition } = this.state
    return this.props.heThongRapChieu.map((heThongRap, index) => {
      return <TabPane tab={<img src={heThongRap.logo} alt="" className='rounded-full' width="50" />} key={index}>
         <Tabs value={tabPosition} onChange={this.onChange} style={{ marginBottom: 16 }}>
         {heThongRap.lstCumRap?.map((cumRap, index) => {
           return  <TabPane tab={
            <div style={{ width: '300px' }} className='flex  '>

              <img src={cumRap.hinhAnh} alt="" width='50' className='rounded-sm mr-2' /><br />
              <div className='text-left text-black text-sm hover:text-indigo-400'>
                {cumRap.tenCumRap}
                <p className='text-indigo-400 '>Chi tiết</p>
              </div>
            </div>
          }
            key={index}>
            {cumRap.danhSachPhim.map((phim, index) => {
              return <Fragment key={index}>
                <div className='menu__time flex my-5 '>
                  <img src={phim.hinhAnh} alt="" style={{ height: '90px', width: '90px' }} className='object-cover rounded-md' />
                  <div className='ml-4'>

                    <h1 className=' text-indigo-700 text-xl uppercase'>{phim.tenPhim}</h1>
                    <p className='opacity-60 text-sm font-semibold'>{cumRap.diaChi}</p>

                    <div className="menu__time-btn grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3  gap-5">

                      {phim.lstLichChieuTheoPhim?.slice(0, 14).map((lichChieu, index) => {
                        return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className=' font-bold background hover:text-white hover:background text-black py-2 px-2 rounded-md'>
                          {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                        </NavLink>
                      })}
                    </div>

                  </div>

                </div>
                <hr />
              </Fragment>
            })}

          </TabPane>
           
         })}
         </Tabs>
      </TabPane>
    })
  }

  render() {

    const { tabPosition } = this.state
    return (

      <div className='container lg:py-24 md:py-16 sm:py-2  mx-auto' >
        <Tabs tabPosition={tabPosition}>
          {this.renderHeThongRap()}
        </Tabs>
      </div>
    )
  }
}

