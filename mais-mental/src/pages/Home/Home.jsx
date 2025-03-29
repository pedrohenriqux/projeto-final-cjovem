import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Servicos/Servicos';
import Professionals from '../../components/Professionals/Professionals';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Professionals />
        <Footer />
      </div>
    </>
  )
}

export default Home