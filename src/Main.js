import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import React from 'react';


function Main(){
  return(
    <main>
      <Router>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Router>
      
    </main>
  );
}
export default Main;