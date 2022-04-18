import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';

export const history = createBrowserHistory()

function App() {
  return (
  
    <Router history={history}>
      <div className="App">
        <Switch>
        <Home/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
