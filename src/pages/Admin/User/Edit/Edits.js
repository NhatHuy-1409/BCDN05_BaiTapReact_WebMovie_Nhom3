import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { GROUP_ID } from '../../../../util/setting/setting';
import { capNhatThongTinNguoiDungAction, layDanhSachNguoiDungAction, themNguoiDungAction } from '../../../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction';
export default function Edits(props) {
     const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
     console.log("danhSachNguoiDung", danhSachNguoiDung);
     const dispatch = useDispatch();

     useEffect(() => {
          console.log(props);
          let { id } = props.computedMatch.params.id;
          dispatch(layDanhSachNguoiDungAction(id));
          // console.log(props.computedMatch.params.id);
     }, []);
     const formik = useFormik({
          enableReinitialize: true,
          initialValues: {
               // taiKhoan: danhSachNguoiDung?.taiKhoan,
               matKhau: danhSachNguoiDung?.matKhau,
               email: danhSachNguoiDung?.email,
               soDt: danhSachNguoiDung?.soDt,
               maNhom: GROUP_ID,
               hoTen: danhSachNguoiDung?.hoTen,
               maLoaiNguoiDung: danhSachNguoiDung?.maLoaiNguoiDung,
          },

          onSubmit: (values) => {
               console.log(values);
               // dispatch(capNhatThongTinNguoiDungAction(values))
          }
     })


     return (
          <form onSubmit={formik.handleSubmit}>
               {/* <Form.Item label="Tài Khoản">
                    <Input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} />
               </Form.Item> */}
               <Form.Item label="Họ tên">
                    <Input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
               </Form.Item>
               <Form.Item label="Mật Khẩu">
                    <Input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
               </Form.Item>
               <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} value={formik.values.email} />
               </Form.Item>
               <Form.Item label="Số điện thoại">
                    <Input name='soDt' onChange={formik.handleChange} value={formik.values.soDt} />
               </Form.Item>
               <Form.Item label="Loại người dùng" >
                    <Select name='maLoaiNguoiDung' value={formik.values.maLoaiNguoiDung} onChange={(value) => formik.setFieldValue("maLoaiNguoiDung", value)}>
                         <Select.Option value="QuanTri">Quản Trị</Select.Option>
                         <Select.Option value="KhachHang">Khách Hàng</Select.Option>
                    </Select>
               </Form.Item>

               <button type='submit' className='bg-blue-700 text-white p-2'>Cập Nhâp </button>

          </form>
     )
}
