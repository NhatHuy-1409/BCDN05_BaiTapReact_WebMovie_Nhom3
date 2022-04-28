import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { InputNumber } from 'antd';
import { quanLyRapServices } from '../../../services/QuanLyRapServices';
import { Formik, useFormik } from 'formik';
import moment from 'moment';
import { quanLyDatVeServices } from '../../../services/QuanLyDatVeServices';

export default function Showtime(props) {
     const formik = useFormik({
          initialValues: {
               maPhim: props.computedMatch.params.id,
               ngayChieuGioChieu: '',
               maRap: '',
               giaVe: '',
          },
          onSubmit: async (values) => {
               console.log('value', values);
               try {
                    const result = await quanLyDatVeServices.taoLichChieu(values)
                    alert(result.data.content)
               } catch (error) {
                    console.log('error', error.response?.data);
               }
          }
     })

     const [state, setState] = useState({
          heThongRapChieu: [],
          cumRapChieu: [],
     });
     console.log(state.cumRapChieu);

     useEffect(async () => {
          try {
               let result = await quanLyRapServices.layThongTinHeThongRap();
               setState({
                    ...state,
                    heThongRapChieu: result.data.content
               })
          } catch (error) {
               console.log('error', error.response?.data);
          }
     }, []);

     const handleChangeHeThongRap = async (values, option) => {
          console.log(values)
          // từ hệ thống rạp call api lây thông tin cụm rap
          try {
               let result = await quanLyRapServices.layThongTinCumRap(values);
               setState({
                    ...state,
                    cumRapChieu: result.data.content
               })
          } catch (error) {
               console.log('error', error.response?.data);
          }
     }
     // const convertSelectHTR = () => {
     //      return state.heThongRapChieu?.map((htr, index) => {
     //           return { label: htr.tenHeThongRap, value: htr.tenHeThongRap }
     //      })
     // }

     const handleChangeHeCumRap = async (value) => {
          formik.setFieldValue('maRap', value);
     }

     const onChangeDate = (values) => {
          formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));
     }

     const onOk = (values) => {
          formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));
     }
     const handleOnChangeInput = (values) => {
          formik.setFieldValue('giaVe', values);

     }

     let film = {};
     if (localStorage.getItem('filmParams')) {
          film = JSON.parse(localStorage.getItem('filmParams'))
     }
     return (
          <div className="container">
               <Form
                    name="basic"
                    labelCol={{ span: 2, }}
                    wrapperCol={{ span: 5, }}
                    initialValues={{ remember: true, }}
                    onSubmitCapture={formik.handleSubmit}
               >
                    <h3>Tạo lịch chiếu</h3>
                    <img src={film.hinhAnh} width={200} height={100} />

                    <Form.Item label="Hệ thống rạp">
                         <Select options={state.heThongRapChieu?.map((htr, index) =>
                              ({ label: htr.tenHeThongRap, value: htr.maHeThongRap }))} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                    </Form.Item>
                    <Form.Item label="Cụm rạp">
                         <Select options={state.cumRapChieu?.map((cr, index) => ({ label: cr.tenCumRap, value: cr.maCumRap }))} onChange={handleChangeHeCumRap} placeholder="Chọn cụm rạp" />
                    </Form.Item>
                    <Form.Item label="Ngày chiếu giờ chiếu">
                         <DatePicker format="DD/MM/YYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />
                    </Form.Item>
                    <Form.Item label="Giá vé">
                         <InputNumber onChange={handleOnChangeInput} />
                    </Form.Item>
                    <Form.Item label="Tác vụ">
                         <Button htmlType="submit">Tạo lịch chiếu</Button>
                    </Form.Item>
               </Form>
          </div>
     )
}
