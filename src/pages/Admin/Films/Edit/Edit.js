import React, { useEffect, useState } from 'react';
import {
     Form,
     Input,
     Button,
     Radio,
     DatePicker,
     InputNumber,
     Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimUploadAction, layThongTinPhimAction } from '../../../../redux/actions/QuanLyPhimAction';
import { GROUP_ID } from '../../../../util/setting/setting';


export default function Edit(props) {
     const [componentSize, setComponentSize] = useState('default');
     const { thongTinPhim } = useSelector(state => state.QuanLyPhimReducer);
     console.log("thongTinPhim", thongTinPhim);
     const [imgSrc, setImgSrc] = useState('');
     const dispatch = useDispatch();
     useEffect(() => {
          // console.log(props);
          let { id } = props.computedMatch.params;
          dispatch(layThongTinPhimAction(id));
          // console.log(props.computedMatch.params.id);
     }, []);
     const formik = useFormik({

          enableReinitialize: true,
          initialValues: {
               maPhim: thongTinPhim.maPhim,
               tenPhim: thongTinPhim.tenPhim,
               trailer: thongTinPhim.trailer,
               moTa: thongTinPhim.moTa,
               ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
               dangChieu: thongTinPhim.dangChieu,
               sapChieu: thongTinPhim.sapChieu,
               hot: thongTinPhim.hot,
               danhGia: thongTinPhim.danhGia,
               hinhAnh: null,
               maNhom: GROUP_ID,
          },
          onSubmit: (values) => {
               // console.log('values', values);
               values.maNhom = GROUP_ID;
               // tạo đối tượng form data => đua giá trị values từ formik vào form data
               let formData = new FormData();
               for (let key in values) {
                    if (key !== 'hinhAnh') {
                         formData.append(key, values[key]);
                    } else {
                         if (values.hinhAnh !== null) {
                              formData.append('File', values.hinhAnh, values.hinhAnh.name);
                         }
                    }
               }
               dispatch(capNhatPhimUploadAction(formData));
          }
     })
     const handleChangeDatePicker = (value) => {
          // console.log('DatePicker',);
          let ngayKhoiChieu = moment(value);
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
     const handelChangeFile = async (e) => {
          // lấy file ra từ e
          let file = e.target.files[0];
          if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
               // đem dữ liệu file đưa vào formik
               await formik.setFieldValue('hinhAnh', file);
               // tạo được đối tương để đọc file
               let reader = new FileReader();
               reader.readAsDataURL(file);
               reader.onload = (e) => {
                    console.log(e.target.result);
                    setImgSrc(e.target.result)//img base 64
               }
               // đem dữ liệu file lưu vào formik
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
               <h3>Sửa phim</h3>
               <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                         <Radio.Button value="small">Small</Radio.Button>
                         <Radio.Button value="default">Default</Radio.Button>
                         <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
               </Form.Item>
               <Form.Item label="Tên Phim">
                    <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
               </Form.Item>
               <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
               </Form.Item>
               <Form.Item label="Mô Tả">
                    <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
               </Form.Item>
               <Form.Item label="Ngày Khởi Chiếu">
                    <DatePicker onChange={handleChangeDatePicker} format={"DD/MM/YYYY"} value={moment(formik.values.ngayKhoiChieu)} />
               </Form.Item>
               <Form.Item label="Đang Chiếu" >
                    <Switch name="dangchieu" onChange={handelChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
               </Form.Item>
               <Form.Item label="Sắp Chiếu" >
                    <Switch name="sapchieu" onChange={handelChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
               </Form.Item>
               <Form.Item label="Hot">
                    <Switch name="hot" onChange={handelChangeSwitch('hot')} checked={formik.values.hot} />
               </Form.Item>

               <Form.Item label="Số sao">
                    <InputNumber onChange={handelChangeInputNumber('danhGia')} value={formik.values.danhGia} />
               </Form.Item>
               <Form.Item label="Hình ảnh">
                    <Input type="file" onChange={handelChangeFile} accept="image/jpg, image/jpeg, image/gif, image/png" />

                    <img style={{ width: 100, height: 100 }} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt='' />
               </Form.Item>
               <Form.Item label="Tác vụ">
                    <button type='submit' className='bg-blue-700 text-white p-2'>Cập Nhập</button>
               </Form.Item>
          </Form>
     );
}



