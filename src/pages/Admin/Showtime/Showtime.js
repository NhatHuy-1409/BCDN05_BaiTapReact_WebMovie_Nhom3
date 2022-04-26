import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Cascader } from 'antd';
import { DatePicker, Space } from 'antd';
import { InputNumber } from 'antd';
import { quanLyPhimServices } from '../../../services/QuanLyPhimServices'
export default function Showtime() {

     const [state, setState] = useState({
          heThongRapChieu: [],
          cumRapChieu: [],
     });


     const handleChangeHeThongRap = (values) => {

     }

     const options = [
          {
               value: 'zhejiang',
               label: 'Zhejiang',
          },
          {
               value: 'jiangsu',
               label: 'Jiangsu',
          },
     ];
     function onChange(value, dateString) {
          console.log('Selected Time: ', value);
          console.log('Formatted Selected Time: ', dateString);
     }

     function onOk(value) {
          console.log('onOk: ', value);
     }


     return (
          <div className="container">
               <Form
                    name="basic"
                    labelCol={{ span: 2, }}
                    wrapperCol={{ span: 5, }}
                    initialValues={{ remember: true, }}
               >
                    <h3>Tạo lịch chiếu</h3>
                    <Form.Item label="Hệ thống rạp">
                         <Cascader options={options} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                    </Form.Item>
                    <Form.Item label="Cụm rạp">
                         <Cascader options={options} onChange={handleChangeHeThongRap} placeholder="Chọn cụm rạp" />
                    </Form.Item>
                    <Form.Item label="Ngày chiếu giờ chiếu">
                         <DatePicker showTime onChange={onChange} onOk={onOk} />
                    </Form.Item>
                    <Form.Item label="Ngày chiếu giờ chiếu">
                         <InputNumber min={75000} max={150000} defaultValue={3} onChange={onChange} />
                    </Form.Item>
                    <Form.Item label="Tác vụ">
                         <Button>Tạo lịch chiếu</Button>
                    </Form.Item>
               </Form>
          </div>
     )
}
