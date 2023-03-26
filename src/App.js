
import './App.css';
import * as React from 'react';

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
        <Route path='*' element={<h1>Not Found</h1>}></Route>
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
