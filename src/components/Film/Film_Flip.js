import React from 'react'
import './Film_Flip.css'

import { StarFilled } from '@ant-design/icons'
export default function Film_Flip(props) {
  const { phim } = props;
  return (

    <div className="card">
      <div className="img1" style={{ backgroundImage: `url(${phim.hinhAnh})` }} />
      <div className="img2" style={{ backgroundImage: `url(${phim.hinhAnh})` }} />
      <div className="title">{phim.tenPhim}</div>
      <div className="btn__card">
        <div className='btnbuy' >đặt vé</div>
      </div>
      <div className="btn__play">
        <div className="play-btn" href="#"></div>
      </div>
      <div className="views flex items-center">{phim.danhGia} <StarFilled className='ml-2' /> </div>
    </div>




  )
}

