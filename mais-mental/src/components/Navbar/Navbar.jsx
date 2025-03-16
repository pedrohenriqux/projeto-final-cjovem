import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdClose, MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

import BtnAjuda from '../BtnAjuda/BtnAjuda.jsx';

const Navbar = () => {

  const [abrirMenu, setAbrirMenu] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [userLogado, setUserLogado] = useState(false);
  const [menuDoPerfil, setMenuDoPerfil] = useState(false);

  const navigate = useNavigate();

  const alterarMenu = () => {
    setAbrirMenu(!abrirMenu);
  }

  const alterarMenuDoPerfil = () => {
    setMenuDoPerfil(!menuDoPerfil);
  }

  const fazerLogin = () => {
    navigate('/login');
  }

  const fazerLogout = () => {
    setUserLogado(false);
    navigate('/');
  }

  let iconMenu;
  if (abrirMenu) {
    iconMenu = <MdClose className='text-3xl' />;
  } else {
    iconMenu = <MdMenu className='text-3xl' />;
  }

  let botaoLogin;
  if (!userLogado) {
    botaoLogin = (
      <button
        onClick={fazerLogin}
        className='bg-primary hover:bg-third duration-200 text-zinc-100 text-base font-bold p-3 rounded-3xl uppercase'
      >
        login
      </button>
    );
  } else {
    botaoLogin = null;
  }

  return (
    <>
      <div className="bg-zinc-100 flex justify-around items-center py-2">
        <div className='flex items-center gap-4 py-2'>
          <Link to="/" className='text-4xl font-bold font-teko'>
            <span className='text-secondary'>mais</span>
            <span className='text-black'>mental</span>
          </Link>

          <div className=' hidden lg:block'>
            <Link to="/cadastro">
              <BtnAjuda />
            </Link>
          </div>

          {isAdmin && !abrirMenu && (
            <div className='hidden lg:block'>
              <Link to="/admin" className='py-3'>
                <RiAdminLine className='text-3xl' />
              </Link>
            </div>
          )}
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
            {botaoLogin}
          </div>
        </div>

        {userLogado && (
          <div className='relative group'>
            <div className='hidden lg:blo'>
              <button onClick={alterarMenuDoPerfil} className='p-2'>
                <FaRegUser className='text-3xl' />
              </button>
            </div>

            {menuDoPerfil && (
              <div className='absolute right-0 mt-2 w-48 bg-white text-sm text-primary rounded shadow-lg'>
                <Link to="/perfil" className='block px-4 py-2 hover:bg-zinc-100'>
                  Meu Perfil
                </Link>
                <Link to="/config-perfil" className='block px-4 py-2 hover:bg-zinc-100'>
                  Configurações
                </Link>
                {isAdmin && (
                  <Link to="/admin" className='block px-4 py-2 hover:bg-zinc-100'>
                    Painel do Administrador
                  </Link>
                )}
                <button
                  onClick={fazerLogout}
                  className='block w-full text-left px-4 py-2 hover:bg-zinc-100'
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <div className='lg:hidden flex items-center gap-4'>
          {userLogado && (
            <button onClick={alterarMenuDoPerfil} className='p-2'>
              <FaRegUser className='text-3xl' />
            </button>
          )}
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

          {!userLogado && (
            <div className='mt-3 flex justify-center'>
              <Link to="/cadastro" className='block'>
                <BtnAjuda />
              </Link>
            </div>
          )}

          {!userLogado && (
            <div className='mt-2 flex justify-center'>
              <button 
                onClick={fazerLogin}
                className='bg-primary hover:bg-third duration-200 text-zinc-100 text-base font-bold py-3 px-12 rounded-3xl uppercase'
              >
                login
              </button>
            </div>
          )}
        </div>
      )}

      <div className="fixed bottom-0 left-0 p-4 bg-white shadow-lg">
        <button
          onClick={() => setUserLogado(true)}
          className="bg-green-500 text-white p-2 rounded"
        >
          Simular Login
        </button>
        <button
          onClick={() => setUserLogado(false)}
          className="bg-red-500 text-white p-2 rounded ml-2"
        >
          Simular Logout
        </button>
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Alternar Admin
        </button>
      </div>

    </>
  );
};

export default Navbar;