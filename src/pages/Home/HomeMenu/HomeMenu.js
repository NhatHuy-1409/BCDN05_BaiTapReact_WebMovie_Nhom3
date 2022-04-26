import React, { Fragment, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom'
import moment from 'moment';
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

    return this.props.heThongRapChieu.map((heThongRap, index) => {
      let { tabPosition } = this.state
      return <TabPane tab={<img src={heThongRap.logo} alt="" className='rounded-full' width="50" />} key={index}>

        <Tabs tabPosition={tabPosition}>
          {heThongRap.lstCumRap?.map((cumRap, index) => {
            return <TabPane tab={
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
                return <Fragment  key={index}>
                  <div className='flex my-5 '>
                    <img src={phim.hinhAnh} alt="" style={{ height: '90px', width: '90px' }} className='object-cover rounded-md' />
                    <div className='ml-4'>

                      <h1 className=' text-indigo-700 text-xl'>{phim.tenPhim}</h1>
                      <p className='opacity-60 text-sm font-semibold'>{cumRap.diaChi}</p>

                      <div className="grid grid-cols-7 gap-5">
                      
                      {phim.lstLichChieuTheoPhim?.slice(0,14).map((lichChieu, index) => {
                        return <NavLink to='/' key={index} className='font-bold bg-indigo-600 hover:text-white hover:bg-indigo-700 text-black py-2 px-2 rounded-md'>

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
    console.log(this.props, 'rap');
    const { tabPosition } = this.state
    return (

      <div className='container py-14 mx-auto'>
        <Tabs tabPosition={tabPosition}>
          {this.renderHeThongRap()}
        </Tabs>
      </div>
    )
  }
}

