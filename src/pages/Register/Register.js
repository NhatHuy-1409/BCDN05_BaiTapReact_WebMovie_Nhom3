import React, { useState } from 'react'
import { history } from '../../App'
import { useFormik } from 'formik'
import { GROUP_ID } from '../../util/setting/setting'
import { useDispatch } from 'react-redux'
import { dangKy } from '../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction'
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Register() {
    const [passShown, setPassShown] = useState(false)
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: GROUP_ID,
            hoTen: ""
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Please enter your account').min(3, 'Account should be between 3 and 6 characters').max(12, 'Account should be between 3 and 12 characters'),
            matKhau: Yup.string().required('Please enter your password').min(6, 'Account should be between 6 and 12 characters').max(12, 'Account should be between 6 and 12 characters'),
            email: Yup.string().required('Please enter your email').email('Please enter a valid email address'),
            soDt: Yup.string().required('Please enter your phone number').matches(/^[0-9]+$/, 'Phonenumber should be number'),
            hoTen: Yup.string().required('Please enter your fullname').matches(/^[A-Z a-z]+$/, 'Fullname should be letter').trim(),
        }),
        onSubmit: values => {
            console.log(values);
            dispatch(dangKy(values))
        },
    })

    return (
        <div className="card bg-white shadow-md rounded-lg px-4 py-4 mb-6  w-full top-0 right-0">
            <form action="#" onSubmit={formik.handleSubmit}>
                <div className="flex items-center justify-center">
                    <h2 className=" text-xl md:text-2xl font-bold tracking-wide">
                        Sign Up
                    </h2>
                </div>
                {/* <h2 className="md:text-xl text-center font-semibold text-gray-800 mb-2" >
                    Sign Up
                </h2> */}
                <input type="text" name='hoTen' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400  text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Full name*" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.hoTen && formik.errors.hoTen ? (
                    <div className='text-red-700 mb-4'>{formik.errors.hoTen}</div>
                ) : <div className='mb-4'></div>}

                <input type="text" name='taiKhoan' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400  text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Account*" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                    <div className='text-red-700 mb-4'>{formik.errors.taiKhoan}</div>
                ) : <div className='mb-4'></div>}

                <div className='relative'>
                    <input type={passShown ? 'text' : 'password'} name='matKhau' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400  text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Password*" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {passShown ?
                        <i className='absolute right-2 top-1.5 cursor-pointer' onClick={() => { setPassShown(!passShown) }}>{eye}</i> :
                        <i className='absolute right-2 top-1.5 cursor-pointer' onClick={() => { setPassShown(!passShown) }}>{eyeSlash}</i>}
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className='text-red-700 mb-4'>{formik.errors.matKhau}</div>
                    ) : <div className='mb-4'></div>}
                </div>


                <input type="text" name='email' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Email*" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? (
                    <div className='text-red-700 mb-4 '>{formik.errors.email}</div>
                ) : <div className='mb-4'></div>}

                <input type="text" name='soDt' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Phone number*" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.soDt && formik.errors.soDt ? (
                    <div className='text-red-700 mb-4 '>{formik.errors.soDt}</div>
                ) : <div className='mb-4'></div>}

                <div className="flex items-center justify-between">
                    {/* <a href="#" className="text-gray-600">Forget Password?</a> */}
                    <button type='submit' className="bg-red-600 text-gray-200  px-2 py-1.5 rounded w-full" >Sign Up</button>
                </div>
            </form>
        </div>
    )
}
