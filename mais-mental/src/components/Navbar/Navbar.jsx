import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from "react-icons/md";

import Logo from '../../assets/Logo/logo.png'
import BtnAjuda from '../BtnAjuda/BtnAjuda.jsx';

const Navbar = () => {

  const [abrirMenu, setAbrirMenu] = useState(false);

  const alterarMenu = () => {
    setAbrirMenu(!abrirMenu);
  }

  let iconMenu;
  if (abrirMenu) {
    iconMenu = <MdClose className='text-4x1' />;
  } else {
    iconMenu = <MdMenu className='text-4x1' />;
  }

  return (
    <>
      <div className="bg-zinc-100 flex justify-around items-center py-2">
        <div className='flex items-center gap-3'>
          <Link to="/">
            <img src={Logo} alt="Logo" className='w-32 h-16' />
          </Link>
          <div className=' hidden lg:block'>
            <Link to="/cadastro">
              <BtnAjuda />
            </Link>
          </div>
        </div>

        <div className='hidden lg:block'>
          <div className='text-primary text-base font-bold flex items-center gap-7 uppercase'>
            <Link to="/" className='inline-block py-2 px-3 hover:text-third duration-200 relative group'>
              home
            </Link>
            <Link to="/buscar-profissionais" className='inline-block py-2 px-3 hover:text-third duration-200 relative group'>
              buscar profissionais
            </Link>
            <Link to="/SouPsicologo" className='inline-block py-2 px-3 hover:text-third duration-200 relative group'>
              sou psicólogo
            </Link>
            <button
              className='bg-primary hover:bg-third duration-200 text-zinc-100 text-base font-bold py-4 px-4 rounded-3xl uppercase'>
              <Link to="/login">login</Link>
            </button>
          </div>
        </div>

        <div className='lg:hidden'>
          <button onClick={alterarMenu} aria-label='Menu'>
            { iconMenu }
          </button>
        </div>
      </div>

      {abrirMenu && (
        <div className='lg:hidden bg-zinc-100 text-primary text-base font-bold uppercase text-center py-4'>
          <Link to="/" className='block py-2 px-3 hover:text-third duration-200'>
            home
          </Link>
          <Link to="/buscar-profissionais" className='block py-2 px-3 hover:text-third duration-200'>
            buscar profissionais
          </Link>
          <Link to="/SouPsicologo" className='block py-2 px-3 hover:text-third duration-200'>
            sou psicólogo
          </Link>
          <div className='mt-3'>
            <Link to="/cadastro" className='block py-2 px-3'>
              <BtnAjuda />
            </Link>
          </div>
          <div className='mt-1 flex justify-center'>
            <button className='bg-primary hover:bg-third duration-200 text-zinc-100 text-base font-bold py-4 px-16 rounded-3xl uppercase'>
              <Link to="/login">login</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;