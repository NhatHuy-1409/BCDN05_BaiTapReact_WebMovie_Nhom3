import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import { CheckoutTemplate } from './templates/CheckoutTemlate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';

import { Suspense, lazy } from 'react'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './pages/Register/Register';

const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemlate/CheckoutTemplate'))
export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <UserTemplate  path='/login' Component={Login}/>
          <UserTemplate  path='/register' Component={Register}/>

          <Suspense fallback={<h1>.............dm đang load</h1>}>
            <CheckoutTemplateLazy path='/checkout/:id' Component={Checkout} />
          </Suspense>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
