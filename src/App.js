import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Switch>
          <Route component={Dashboard} path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
