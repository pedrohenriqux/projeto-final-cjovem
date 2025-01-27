import React from 'react'
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";

import Logo from '../../assets/Logo/logo.png'
import BtnAjuda from '../BtnAjuda/BtnAjuda.jsx';

const Navbar = () => {
  return (
    <>
      <div className="bg-zinc-100 flex justify-around items-center py-2">
        <div className='flex items-center gap-3'>
          <Link to="/">
            <img src={Logo} alt="Logo" className='w-32 h-16' />
          </Link>
          <Link to="/cadastro">
            <BtnAjuda />
          </Link>
        </div>
        <div className='hidden lg:block'>
          <div className='text-primary text-base font-bold flex items-center gap-7 uppercase'>
            <Link to="/" className='inline-block py-2 px-3 hover:text-third duration-200 relative group'>
              home
            </Link>
            <Link to="/buscar-profissionais" className='inline-block py-2 px-3 hover:text-third duration-200 relative group'>
              buscar profissionais
            </Link>
            <Link to="/cadastro" className='inline-block py-2 px-3 hover:text-third duration-200 relative group'>
              sou psicólogo
            </Link>
            <button
              className='bg-primary hover:bg-third duration-200 text-zinc-100 text-base font-bold py-4 px-4 rounded-3xl uppercase'>
              <Link to="/login">login</Link>
            </button>
          </div>
        </div>
        <div className='lg:hidden'>
          <MdMenu className='text-4xl' />
        </div>
      </div>
    </>
  )
}

export default Navbar;