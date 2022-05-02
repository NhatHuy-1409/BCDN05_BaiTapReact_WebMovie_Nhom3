import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { GROUP_ID } from '../../../../util/setting/setting';
import { themNguoiDungAction } from '../../../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction';
export default function Add() {
     const [componentSize, setComponentSize] = useState('default');

     const dispatch = useDispatch();
     const formik = useFormik({
          initialValues: {
               taiKhoan: "",
               matKhau: "",
               email: "",
               soDt: "",
               maNhom: GROUP_ID,
               hoTen: "",
               maLoaiNguoiDung: "",
          },

          onSubmit: (values) => {
               console.log(values);
               dispatch(themNguoiDungAction(values))
          }
     })

     const onFormLayoutChange = ({ size }) => {
          setComponentSize(size);
     };
     return (
          <form onSubmit={formik.handleSubmit}
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
               <Form.Item label="Tài Khoản">
                    <Input name='taiKhoan' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Họ tên">
                    <Input name='hoTen' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Mật Khẩu">
                    <Input name='matKhau' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Số điện thoại">
                    <Input name='soDt' onChange={formik.handleChange} />
               </Form.Item>
               <Form.Item label="Loại người dùng" >
                    <Select name='maLoaiNguoiDung' value={formik.values.maLoaiNguoiDung} onChange={(value) => formik.setFieldValue("maLoaiNguoiDung", value)}>
                         <Select.Option value="QuanTri">Quản Trị</Select.Option>
                         <Select.Option value="KhachHang">Khách Hàng</Select.Option>
                    </Select>
               </Form.Item>

               <button type='submit' className='bg-blue-700 text-white p-2'>Add </button>

          </form>
     )
}
