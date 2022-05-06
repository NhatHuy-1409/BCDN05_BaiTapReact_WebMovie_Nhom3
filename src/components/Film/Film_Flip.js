import React, {useState} from 'react'
import './Film_Flip.css'
import { StarFilled } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import { Modal } from 'antd';




export default function Film_Flip(props) {
  const { phim } = props;
  let  {trailerUrl , setTrailerUrl} = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <div className="cardFilm">
      <div className="img1" style={{ backgroundImage: `url(${phim.hinhAnh})` }} />
      <div className="img2" style={{ backgroundImage: `url(${phim.hinhAnh})` }} />
      <div className="title">{phim.tenPhim}</div>
      <div className="btn__card">
        <div onClick={() => {
          history.push(`/detail/${phim.maPhim}`)
        }} className='btnbuy' >Đặt vé</div>
      </div>
      <div className="btn__play">
        <div className="play-btn" 
           onClick={() => {
            setTrailerUrl(phim.trailer)
            // console.log(phim.trailer);
            setIsModalVisible(true);
            
          }}
        ></div>
      </div>
      <div className="views flex items-center">{phim.danhGia} <StarFilled className='ml-2' /> </div>
    </div >
    <Modal title="Basic Modal" visible={isModalVisible}  onCancel={handleCancel}>
      {/* <iframe width='100%' height='100%' title='trailer' ></iframe> */}
      <iframe src={trailerUrl} width='100%' height='100%' title='trailer' ></iframe>
      </Modal>
    </>




  )
}

