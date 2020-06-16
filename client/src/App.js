import React from 'react';
import './App.css';
import MyNavBar from './navBar.js';
import MyForm from './request.js';
import MyFormCheck from './check.js';
import Stats from './stats.js';
import MyFormCheckBetween from "./checkBetweenDates.js"
import ByStore from "./CheckByStore.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (

    <div>
      <Router>
        <MyNavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/request' component={MyForm}/>
            <Route path='/check' component={MyFormCheck} />
            <Route path='/stats' component={Stats}/>
            <Route path='/checkBetweenDates' component={MyFormCheckBetween}/>
            <Route path='/CheckByStore' component={ByStore}/>
          </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <header className="App-header">
    <img src="LcDelivery.png" className="App-logo" alt="logo" />
    <h3>Welcome to our sick time management</h3>
  </header>
)

export default App;
