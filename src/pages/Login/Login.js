import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../App'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { dangNhap } from '../../redux/actions/QuanLyNguoiDungAction/QuanLyNguoiDungAction';
import { TOKEN } from '../../util/setting/setting';
import { Redirect } from 'react-router-dom';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Login() {

    const [passShown, setPassShown] = useState(false)
    let dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            // maNhom: GROUP_ID,
        },
        onSubmit: values => {
            dispatch(dangNhap(values))
        },
    })
    if (localStorage.getItem(TOKEN)) {
        alert('You have succesfully signed in our website.');
        history.goBack()
        return null
    } else {
        return (
            <div className="card bg-white shadow-md rounded-lg px-4 py-4 mb-6  w-full 2md:top-20 top-10 right-0 ">
                <form action="#" onSubmit={formik.handleSubmit}> 
                    <div className="flex items-center justify-center">
                        <h2 className=" text-xl md:text-2xl font-bold tracking-wide">
                            Sign In
                        </h2>
                    </div>
                    {/* <h2 className="md:text-xl text-center font-semibold text-gray-800 mb-2" >
                    Sign In
                </h2> */}
                    <input type="text" name='taiKhoan' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400 mb-6 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Account*" onChange={formik.handleChange} />
                    <div className='relative'>
                        <input type={passShown ? 'text' : 'password'} name='matKhau' className="rounded px-4 w-full py-1.5 bg-gray-200  border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Password*" onChange={formik.handleChange} />
                        {passShown ?
                            <i className='absolute right-2 top-1.5 cursor-pointer' onClick={() => { setPassShown(!passShown) }}>{eye}</i> :
                            <i className='absolute right-2 top-1.5 cursor-pointer' onClick={() => { setPassShown(!passShown) }}>{eyeSlash}</i>}
                    </div>

                    <div className="flex items-center justify-between">
                        <a href="#" className="text-gray-600">Forget Password?</a>
                        <button type='submit' className="bg-gray-800 text-gray-200  px-2 py-1.5 rounded" >Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}
