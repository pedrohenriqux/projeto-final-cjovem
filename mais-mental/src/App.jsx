import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import SouPsicologo from './pages/SouPsicologo/SouPsicologo.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/SouPsicologo' element={<SouPsicologo />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;