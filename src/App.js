import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import { CheckoutTemplate } from './templates/CheckoutTemlate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import BookingTickets from './pages/BookingTickets/BookingTickets';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login';

import { Suspense, lazy } from 'react'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './pages/Register/Register';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import DashBoard from './pages/Admin/DashBoard/DashBoard';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';

const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemlate/CheckoutTemplate'))
export const history = createBrowserHistory()

function App() {

  return (

    <Router history={history}>
      <div className="App">
        <Switch>
          <HomeTemplate exact path='/' component={Home} />

          <HomeTemplate exact path='/home' component={Home} />
          <HomeTemplate exact path='/bookingtickets' component={BookingTickets} />
          <HomeTemplate exact path='/movies' component={Movies} />
          <UserTemplate path='/login' exact Component={Login} />
          <UserTemplate path='/register' exact Component={Register} />
          <AdminTemplate path='/admin' exact Component={DashBoard} />
          <AdminTemplate path='/admin/films' exact Component={Films} />
          <AdminTemplate path='/admin/films/addnew' exact Component={AddNew} />
          <AdminTemplate path='/admin/films/edit/:id' exact Component={Edit} />
          <AdminTemplate path='/admin/films/showtime/:id' exact Component={Showtime} />
          <AdminTemplate path='/admin/user' exact Component={DashBoard} />
          {/* <AdminTemplate path='/admin/showtime' exact Component={Showtime} /> */}
          <Suspense fallback={<h1>............. load</h1>}>
            <CheckoutTemplateLazy path='/checkout/:id' Component={Checkout} />
          </Suspense>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
