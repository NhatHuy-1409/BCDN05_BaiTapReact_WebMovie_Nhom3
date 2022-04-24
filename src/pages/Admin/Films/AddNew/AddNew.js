import React, { useState } from 'react';
import {
     Form,
     Input,
     Button,
     Radio,
     Select,
     Cascader,
     DatePicker,
     InputNumber,
     TreeSelect,
     Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';



export default function AddNew(props) {
     const [componentSize, setComponentSize] = useState('default');
     const [imgSrc, setImgSrc] = useState('');
     const formik = useFormik({
          initialValues: {
               tenPhim: '',
               trailer: '',
               moTa: '',
               ngayKhoiChieu: '',
               dangChieu: false,
               sapChieu: false,
               hot: false,
               danhGia: 0,
               hinhAnh: {},


          },
          onSubmit: (values) => {
               console.log('values', values);
          }
     })
     const handleChangeDatePicker = (value) => {
          console.log('DatePicker',);
          let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
          formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu)
     }
     // handelChangeSwitch
     const handelChangeSwitch = (name) => {
          return (value) => { formik.setFieldValue(name, value) }
     }
     // handelChangeInputNumber
     const handelChangeInputNumber = (name) => {
          return (value) => { formik.setFieldValue(name, value) }
     }
     // handelChangeFile
     const handelChangeFile = (e) => {
          // lấy file ra từ e
          let file = e.target.files[0];
          console.log('file', file);
          if (file.type === 'image/jpeg' || 'image/jpg' || 'image/gif' || 'image/png') {
               // tạo được đối tương để đọc file
               let reader = new FileReader();
               reader.readAsDataURL(file);
               reader.onload = (e) => {
                    console.log(e.target.result);
                    setImgSrc(e.target.result)//img base 64
               }
               // đem dữ liệu file lưu vào formik
               formik.setFieldValue('hinhAnh', file);
          }
     }
     // onFormLayoutChange
     const onFormLayoutChange = ({ size }) => {
          setComponentSize(size);
     };

     return (
          <Form
               onSubmitCapture={formik.handleSubmit}
               labelCol={{
                    span: 4,
               }}
               wrapperCol={{
                    span: 14,
               }}
               layout="horizontal"
               initialValues={{
                    size: componentSize,
               }}
               onValuesChange={onFormLayoutChange}
               size={componentSize}
          >
               <h3>Thêm Phim Mới</h3>
               <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                         <Radio.Button value="small">Small</Radio.Button>
                         <Radio.Button value="default">Default</Radio.Button>
                         <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
               </Form.Item>
               <Form.Item label="Tên Phim">
                    <Input name='tenPhim' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Mô Tả">
                    <Input name='moTa' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Ngày Khởi Chiếu">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
               </Form.Item>
               <Form.Item label="Đang Chiếu" valuePropName="checked">
                    <Switch name="dangchieu" onChange={handelChangeSwitch('dangChieu')} />
               </Form.Item>
               <Form.Item label="Sắp Chiếu" valuePropName="checked">
                    <Switch name="sapchieu" onChange={handelChangeSwitch('sapChieu')} />
               </Form.Item>
               <Form.Item label="Hot" valuePropName="checked">
                    <Switch name="hot" onChange={handelChangeSwitch('hot')} />
               </Form.Item>

               <Form.Item label="Số sao">
                    <InputNumber onChange={handelChangeInputNumber('danhGia')} min={1} max={10} />
               </Form.Item>
               <Form.Item label="Hình ảnh">
                    <Input type="file" onChange={handelChangeFile} accept="image/jpg, image/jpeg, image/gif, image/png" />

                    <img style={{ width: 100, height: 100 }} src={imgSrc} alt='' />
               </Form.Item>
               <Form.Item label="Tác vụ">
                    <button type='submit' className='bg-blue-700 text-white p-2'>Thêm Phim</button>
               </Form.Item>
          </Form>
     );
}



