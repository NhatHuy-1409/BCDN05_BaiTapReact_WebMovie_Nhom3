import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimAction';
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
               // onFilter: (value, record) => record.address.indexOf(value) === 0,
               // sorter: (a, b) => {
               //      let moTaA = a.moTa.toLowerCase().trim();
               //      let moTaB = b.moTa.toLowerCase().trim();

               //      if (moTaA > moTaB) {
               //           return 1;
               //      }
               //      return -1
               // },
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
               dataIndex: 'hanhDong',
               render: (test, film) => {
                    return <Fragment>
                         <NavLink className="mr-5 p-2 text-2xl" to="/"><EditOutlined style={{ color: "blue" }} /></NavLink>
                         <NavLink className="text-2xl" to="/"><DeleteOutlined style={{ color: "red" }} /></NavLink>
                    </Fragment>
               },
               sortDirections: ['descend', 'ascend'],
               width: '25%'
          },
     ];
     const data = arrfilmDefault;
     const onSearch = value => console.log(value);
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
               <Table columns={columns} dataSource={data} onChange={onChange} />
          </div>
     )
}
