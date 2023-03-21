import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Header from './Components/Header';
import Search from './Components/Search';
import DropMenu from './Components/DropMenu';
import SearchAndDrop from './Components/SearchAndDrop';

import Countries from './Components/Countries';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='*' element={<h2>Not Found</h2>}></Route>
      </Routes>
      

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
