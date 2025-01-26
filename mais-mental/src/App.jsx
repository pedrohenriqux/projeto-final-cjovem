import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;