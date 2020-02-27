import React from 'react';
import './App.css';
import Login from './content/login'
import SignUp from './content/signup';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1> African MarketPlace </h1>
          <Router>

            <Link to='/login'>Login</Link>
            <Link to='/signup'> Sign Up</Link>

            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
            </Switch>

          </Router>
          
      </header>
    </div>
  );
}

export default App;
