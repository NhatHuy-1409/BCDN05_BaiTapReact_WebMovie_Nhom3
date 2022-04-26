import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction, xoaPhimAction } from '../../../redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';

const { Search } = Input;
export default function Films() {
     const { arrfilmDefault } = useSelector(state => state.QuanLyPhimReducer);
     const dispatch = useDispatch();
     console.log(arrfilmDefault);
     useEffect(() => {
          dispatch(layDanhSachPhimAction())
     }, [])

     const columns = [
          {

               title: 'Mã Phim',
               dataIndex: 'maPhim',
               // value: (text, object) => { return <span>{text}</span> },
               onFilter: (value, record) => record.maPhim.indexOf(value) === 0,
               sorter: (a, b) => a.maPhim - b.maPhim,
               sortDirections: ['descend', 'ascend'],
               width: '15%'
          },
          {
               title: 'Hình Ảnh',
               dataIndex: 'hinhAnh',
               render: (text, film, index) => {
                    return <Fragment>
                         <img src={film.hinhAnh} alt={film.hinhAnh} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                    </Fragment>
               },
               width: '15%'
               // defaultSortOrder: 'descend',
               // sorter: (a, b) => a.hinhAnh - b.hinhAnh,
          },
          {
               title: 'Tên Phim',
               dataIndex: 'tenPhim',
               onFilter: (value, record) => record.address.indexOf(value) === 0,
               sorter: (a, b) => {
                    let tenPhimA = a.tenPhim.toLowerCase().trim();
                    let tenPhimB = b.tenPhim.toLowerCase().trim();

                    if (tenPhimA > tenPhimB) {
                         return 1;
                    }
                    return -1
               },

               sortDirections: ['descend', 'ascend'],
               width: '25%'
          },
          {
               title: 'Mô Tả',
               dataIndex: 'moTa',
               render: (test, film) => {
                    return <Fragment>
                         {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                    </Fragment>
               },
               sortDirections: ['descend', 'ascend'],
               width: '25%'
          },
          {
               title: 'Hành Động',
               dataIndex: 'maPhim',
               render: (test, film) => {
                    return <Fragment>
                         <NavLink key={1} className="mr-5 p-2 text-2xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined style={{ color: "blue" }} /></NavLink>
                         <span key={2} style={{ cursor: 'pointer' }} className="text-2xl" onClick={() => {
                              // Gọi action xoá
                              if (window.confirm('bạn có chắc muốn xoá không ?' + film.tenPhim)) {
                                   // Gọi action
                                   dispatch(xoaPhimAction(film.maPhim));
                              }
                         }}><DeleteOutlined style={{ color: "red" }} /></span>
                         <NavLink key={3} className="mr-5 p-2 text-2xl" to={`/admin/films/showtime/${film.maPhim}`}><CalendarOutlined style={{ color: "blue" }} /></NavLink>
                    </Fragment>
               },
               sortDirections: ['descend', 'ascend'],
               width: '25%'
          },
     ];
     const data = arrfilmDefault;
     const onSearch = value => {
          console.log(value);
          //gọi app lấy dsphim
          dispatch(layDanhSachPhimAction(value))

     };
     function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
     }
     return (
          <div>
               <h3 className='text-4xl'>Quản lí phim</h3>
               <Button className='mb-5' onClick={() => {
                    history.push("/admin/films/addnew");
               }}>Thêm Phim</Button>
               <Search className='mb-5'
                    placeholder="input search text"
                    allowClear
                    enterButton={<SearchOutlined />}
                    size="large"

                    onSearch={onSearch}
               />
               <Table columns={columns} dataSource={data} onChange={onChange} rowKey="maPhim" />
          </div>
     )
}
