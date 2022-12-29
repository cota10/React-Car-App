import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Car } from './components'
import './style.css'
import { Provider } from 'react-redux';
import {store} from './redux/store'


const temp_props = "Car Invenory"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/car'>
          <Car></Car>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
    


      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


