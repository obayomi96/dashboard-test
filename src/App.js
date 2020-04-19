import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

import url from './data/order.json';

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
