
import './App.css';
import * as React from 'react';
import { useState, createContext, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import HomeContainer from './Components/HomeContainer';
import DetailContainer from './Components/DetailContainer';
import { ThemeContext } from './Contexts/ThemeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



function App() {

  const [theme, setTheme] = useState(localStorage.getItem('Theme') ? localStorage.getItem('Theme') : 'light');



  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >

      <DndProvider backend={HTML5Backend}>
        <div className={`App ${theme}`}>

          <Routes>
            <Route path='/' element={<HomeContainer />}></Route>
            <Route path='/home' element={<HomeContainer />}></Route>
            <Route path='/detail' element={<DetailContainer />}></Route>
            <Route path='*' element={<h1>Not Found</h1>}></Route>
          </Routes>

        </div>
      </DndProvider>
    </ThemeContext.Provider>
  );
}

export default App;
