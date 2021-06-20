import './App.css';
import React, { useState } from 'react';
import Workers from './components/workersList';
import Login from './components/login';
import HomePage from './components/homePage';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <Switch>
              <Route exact component={HomePage} path="/"></Route>
              <Route exact component={Login} tokenCB={setToken} path="/login" />
              <Route exact component={Workers} token={token} path="/workersList" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
