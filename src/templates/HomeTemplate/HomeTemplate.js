// import Header from "../component/Header/Header";
import { Route } from 'react-router-dom';
import { Fragment, useEffect } from "react";
import Header from '../Header/Header';
// import HomeCarousel from './Layout/HomeCarousel';
import Footer from '../Footer/Footer';

export const HomeTemplate = (props) => {
  useEffect(() =>{
    window.scrollTo(0, 0);
  })
  return <Route exact path={props.path} render={(propsRoute) => {
    // Fragment: Gần giống div nhưng sẽ ko hiển thị trên giao diện thẻ
    return <Fragment>
      <Header {...propsRoute} />
      {/* <HomeCarousel/>/ */}
      <props.component {...propsRoute} />
      <Footer />
    </Fragment>
  }} />
}
