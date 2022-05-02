import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction';
import { xoaPhimAction } from '../../../redux/actions/QuanLyPhimAction';

const { Search } = Input;
export default function User(props) {
     const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(layDanhSachNguoiDungAction())
     }, [])


     const columns = [
          // {

          //      title: 'STT',
          //      dataIndex: `1`,
          //      // value: (text, object) => { return <span>{text}</span> },
          //      onFilter: (value, record) => record.stt.indexOf(value) === 0,
          //      sorter: (a, b) => a.stt - b.stt,
          //      sortDirections: ['descend', 'ascend'],
          //      width: '10%'
          // },
          {
               title: 'Tài Khoản',
               dataIndex: 'taiKhoan',
               // value: (text, object) => { return <span>{text}</span> },
               onFilter: (value, record) => record.taKhoan.indexOf(value) === 0,
               sorter: (a, b) => a.taiKhoan - b.taiKhoan,
               sortDirections: ['descend', 'ascend'],
               width: '10%'
          },

          {
               title: 'Họ tên',
               dataIndex: 'hoTen',
               onFilter: (value, record) => record.hoTen.indexOf(value) === 0,
               sorter: (a, b) => {
                    let hoTenA = a.hoTen.toLowerCase().trim();
                    let hoTenB = b.hoTen.toLowerCase().trim();

                    if (hoTenA > hoTenB) {
                         return 1;
                    }
                    return -1
               },

               sortDirections: ['descend', 'ascend'],
               width: '20%'
          },
          {
               title: 'Mật Khẩu',
               dataIndex: 'matKhau',
               onFilter: (value, record) => record.matKhau.indexOf(value) === 0,
               sortDirections: ['descend', 'ascend'],
               width: '15%'
          },
          {
               title: 'Số điện thoại',
               dataIndex: 'soDt',
               onFilter: (value, record) => record.matKhau.indexOf(value) === 0,
               sortDirections: ['descend', 'ascend'],
               width: '15%'
          },
          {
               title: 'Email',
               dataIndex: 'email',
               onFilter: (value, record) => record.email.indexOf(value) === 0,
               sortDirections: ['descend', 'ascend'],
               width: '15%'
          },
          {
               title: 'Hành Động',
               dataIndex: 'taiKhoan',
               render: (test, nd) => {
                    return <Fragment>
                         <NavLink key={1} className="mr-5 p-2 text-2xl" to={`/admin/user/edit/${nd.taiKhoan}`}><EditOutlined style={{ color: "blue" }} />
                         </NavLink>
                         <span key={2} style={{ cursor: 'pointer' }} className="text-2xl" onClick={() => {
                              // Gọi action xoá
                              if (window.confirm('Bạn có chắc muốn xoá Tài Khoản không ? ' + nd.taiKhoan)) {
                                   // Gọi action

                                   dispatch(xoaNguoiDungAction(nd.taiKhoan));
                              }
                         }}><DeleteOutlined style={{ color: "red" }} /></span>

                    </Fragment>
               },
               sortDirections: ['descend', 'ascend'],
               width: '25%'
          },
     ];
     const data = danhSachNguoiDung;
     const onSearch = value => {
          console.log(value);
          //gọi app lấy dsphim
          // dispatch(layDanhSachPhimAction(value))

     };
     function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
     }


     return (
          <div>
               <h3 className='text-4xl'>Quản Lý User</h3>
               <Button className='mb-5' onClick={() => {
                    history.push("/admin/user/add");
               }}>Thêm Người Dùng</Button>
               <Search className='mb-5'
                    placeholder="input search text"
                    allowClear
                    enterButton={<SearchOutlined />}
                    size="large"
                    onSearch={onSearch}
               />
               <Table columns={columns} dataSource={data} onChange={onChange} rowKey="taiKhoan" />
          </div>
     )
}
