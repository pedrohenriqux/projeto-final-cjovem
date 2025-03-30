import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import SouPsicologo from './pages/SouPsicologo/SouPsicologo.jsx';
import Admin from './pages/Admin/Admin.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/SouPsicologo' element={<SouPsicologo />}/>
      <Route path='/admin' element={<Admin />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;