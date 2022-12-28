import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components'
import './style.css'


const temp_props = "Car Invenory"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        
    


      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


