import { Fragment } from "react"
import { Route } from "react-router-dom"
import { history } from "../../App"
import logo from '../../assets/Images/logo-02-01.png'
import './UserTemplate.css'
export const UserTemplate = (props) => {
    const { Component, ...restProps } = props

    return <Route exact path={restProps.path} render={(propsRoute) => {
        return <Fragment>
            <header className="py-5 bg-cover border-t-2 border-blue-600 min-h-screen h-full " style={{ backgroundImage: 'linear-gradient(rgba(0, 0,0, 0.7), rgba(0, 0, 0, 0.7)), url("https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/223be4d2-5223-4bd0-90ea-289e4f470c5e/VN-vi-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg")' }
            }>
                <div className="container w-full max-w-full	">
                    <nav className="flex items-center justify-between">
                   
                        <img src={logo} alt="" className="w-16 cursor-pointer" onClick={() => { history.push('/home') }} />
                        <div className="auth flex items-center">
                            <button className="bg-transparent text-gray-200  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700" onClick={() => { history.push('/login') }}>Sign in</button>
                            <button className="bg-red-600 text-gray-200  py-2 px-3 rounded  hover:bg-red-800 hover:text-gray-100" onClick={() => { history.push('/register') }}>Sign up</button>
                        </div>
                    </nav>
                    <div className="body mt-10 ssm:mt-5 md:mt-20 ssm:mx-8" >
                        <div className="content md:flex items-center justify-between "style={{height:'150%'}} >
                            <div className="w-full   md:w-1/2 mr-auto" style={{ textShadow: '0 20px 50px hsla(0,0%,0%,8)' }}>

                                <h1 className="text-4xl sm:text-5xl   xl:text-7xl font-bold text-white tracking-wide">CYBERMOVIE</h1>
                                <h2 className=" text-2xl sm:text-3xl  xl:text-5xl font-bold text-white tracking-wide">Unlimited movies, TV shows, and more.</h2>
                                <p className="text-white text-xl  sm:text-2xl  xl:text-3xl">
                                    Watch anywhere. Cancel anytime.
                                </p>

                            </div>

                            <div className="w-full  md:max-w-md mt-6 relative flex md:h-full">
                                <Component {...propsRoute} />
                            </div>


                        </div>
                    </div>
                </div>
            </header >
        </Fragment>
    }} >

    </Route>
}
