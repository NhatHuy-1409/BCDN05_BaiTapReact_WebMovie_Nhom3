import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
