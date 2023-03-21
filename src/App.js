import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Header from './Components/Header';
import Search from './Components/Search';
import DropMenu from './Components/DropMenu';
import SearchAndDrop from './Components/SearchAndDrop';

import Countries from './Components/Countries';
import { Route, Routes,Switch } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';



function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/home' ><Home /></Route>
        <Route path='/detail'><Detail/></Route>
        <Route path='*'><h1>Not Found</h1></Route>
      </Switch>
      

      {/* <img src={logo} className="App-logo" alt="logo" />

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}

    </div>
  );
}

export default App;
