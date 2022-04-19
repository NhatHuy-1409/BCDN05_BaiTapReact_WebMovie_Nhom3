import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import BookingTickets from './pages/BookingTickets/BookingTickets';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export const history = createBrowserHistory()

function App() {
  
  return (
    
    <Router history={history}>
      <div className="App">
        <Switch>
        <HomeTemplate exact path='/home' component={Home}/>
        <HomeTemplate exact path='/bookingtickets' component={BookingTickets}/>
        <HomeTemplate exact path='/movies' component={Movies}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>

        <HomeTemplate exact path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
