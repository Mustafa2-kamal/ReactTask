
import './App.css';
import * as React from 'react';
import { useState, createContext,useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';


export const ThemeContext = createContext();

function App() {

  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme'));

  // useEffect(() => {
  //   const theme = localStorage.getItem('darkTheme');
  //   if (theme) {
  //    setDarkTheme(theme);
  //   }
  //   return () => {
      
  //   };
  // }, darkTheme);

  const theme = { darkTheme, setDarkTheme };
  console.log(darkTheme)


  return (
    <ThemeContext.Provider value={theme} >

      <div className="App">

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='*' element={<h1>Not Found</h1>}></Route>
        </Routes>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
