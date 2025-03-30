import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import AdminFull from '../../components/Admin/AdminFull';
import Footer from '../../components/Footer/Footer';

const Admin = () => {
  return (
    <>
      <div>
        <Navbar />
        <AdminFull />
        <Footer />
      </div>
    </>
  )
}

export default Admin;