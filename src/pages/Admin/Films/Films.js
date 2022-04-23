import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimAction';

const { Search } = Input;
export default function Films() {

     const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer || {});
     const dispatch = useDispatch();
     console.log(arrFilmDefault);
     useEffect(() => {
          dispatch(layDanhSachPhimAction())
     }, [])

     const columns = [
          {
               title: 'Name',
               dataIndex: 'name',
               filters: [
                    {
                         text: 'Joe',
                         value: 'Joe',
                    },
                    {
                         text: 'Jim',
                         value: 'Jim',
                    },
                    {
                         text: 'Submenu',
                         value: 'Submenu',
                         children: [
                              {
                                   text: 'Green',
                                   value: 'Green',
                              },
                              {
                                   text: 'Black',
                                   value: 'Black',
                              },
                         ],
                    },
               ],
               // specify the condition of filtering result
               // here is that finding the name started with `value`
               onFilter: (value, record) => record.name.indexOf(value) === 0,
               sorter: (a, b) => a.name.length - b.name.length,
               sortDirections: ['descend'],
          },
          {
               title: 'Age',
               dataIndex: 'age',
               defaultSortOrder: 'descend',
               sorter: (a, b) => a.age - b.age,
          },
          {
               title: 'Address',
               dataIndex: 'address',
               filters: [
                    {
                         text: 'London',
                         value: 'London',
                    },
                    {
                         text: 'New York',
                         value: 'New York',
                    },
               ],
               onFilter: (value, record) => record.address.indexOf(value) === 0,
          },
     ];
     const data = [
          {
               key: '1',
               name: 'John Brown',
               age: 32,
               address: 'New York No. 1 Lake Park',
          },
          {
               key: '2',
               name: 'Jim Green',
               age: 42,
               address: 'London No. 1 Lake Park',
          },
          {
               key: '3',
               name: 'Joe Black',
               age: 32,
               address: 'Sidney No. 1 Lake Park',
          },
          {
               key: '4',
               name: 'Jim Red',
               age: 32,
               address: 'London No. 2 Lake Park',
          },
     ];
     const onSearch = value => console.log(value);
     function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
     }
     return (
          <div>
               <h3 className='text-4xl'>Quản lí phim</h3>
               <Button className='mb-5'>Thêm Phim</Button>
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
