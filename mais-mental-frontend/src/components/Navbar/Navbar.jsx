import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const alterarMenu = () => setAbrirMenu(!abrirMenu);
  const alterarMenuDoPerfil = () => setMenuDoPerfil(!menuDoPerfil);
  const fazerLogin = () => navigate('/login');
  const fazerLogout = () => {
    setUserLogado(false);
    navigate('/');
  }

  const iconMenu = abrirMenu ?
    <MdClose className='text-3xl' /> :
    <MdMenu className='text-3xl' />

    const botaoLogin = !userLogado ? (
      <button
        onClick={fazerLogin}
        className='border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 px-12 uppercase text-sm transition-colors'
      >
        login
      </button>
    ) : null;

  return (
    <>
      <div className="bg-zinc-100 flex justify-between items-center px-12 py-6 shadow-sm">
        <div className='flex items-center gap-6 '>
          <Link to="/" className='text-4xl font-bold font-teko'>
            <span className='text-secondary'>mais</span>
            <span className='text-black'>mental</span>
          </Link>

          {isAdmin && (
            <Link to="/admin" className='hidden lg:block py-1'>
              <RiAdminLine className='text-3xl text-gray-600 hover:text-third transition-colors' />
            </Link>
          )}
        </div>

        <div className='hidden lg:flex flex-1 justify-center'>
          <div className='flex gap-8'>
            <Link
              to="/"
              className='text-gray-700 py-2 px-3 hover:text-third font-semibold text-lg transition-colors uppercase'
            >
              home
            </Link>
            <Link
              to="/buscar-profissionais"
              className='text-gray-700 py-2 px-3 hover:text-third font-semibold text-lg transition-colors uppercase'
            >
              buscar profissionais
            </Link>
            <Link
              to="/cadastro"
              className='text-gray-700 py-2 px-3 hover:text-third font-semibold text-lg transition-colors uppercase'
            >
              sou psicólogo
            </Link>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='hidden lg:flex items-center gap-4'>
            {!userLogado && (
              <Link to="/cadastro">
                <BtnAjuda />
              </Link>
            )}

            {botaoLogin}
          </div>

          {userLogado && (
            <div className='relative'>
              <button
                onClick={alterarMenuDoPerfil}
                className='p-1 text-gray-600 hover:text-third transition-colors'
              >
                <FaRegUser className='text-2xl md:text-3xl lg:text-3xl' />
              </button>

              {menuDoPerfil && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-100'>
                  <Link
                    to="/perfil"
                    className='block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700'
                    onClick={alterarMenuDoPerfil}
                  >
                    Meu Perfil
                  </Link>

                  <Link
                    to="/config-perfil"
                    className='block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700'
                    onClick={alterarMenuDoPerfil}
                  >
                    Configurações
                  </Link>

                  {isAdmin && (
                    <Link
                      to="/admin"
                      className='block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700'
                      onClick={alterarMenuDoPerfil}
                    >
                      Painel do Administrador
                    </Link>
                  )}

                  <button
                    onClick={fazerLogout}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            onClick={alterarMenu}
            className='lg:hidden text-gray-600 hover:text-primary p-2 transition-colors'
            aria-label='Menu'
          >
            {iconMenu}
          </button>
        </div>
      </div>

      {abrirMenu && (
        <div className='lg:hidden bg-white py-3 border-t border-gray-200'>
          <div className='mx-auto max-w-7xl space-y-3'>
            <Link
              to='/'
              className='block py-2 text-gray-700 hover:bg-gray-50 rounded-md text-center font-medium text-lg uppercase'
              onClick={alterarMenu}
            >
              home
            </Link>

            <Link
              to='/buscar-profissionais'
              className='block py-2 text-gray-700 hover:bg-gray-50 rounded-md text-center font-medium text-lg uppercase'
              onClick={alterarMenu}
            >
              buscar profissionais
            </Link>

            <Link
              to='/cadastro'
              className='block py-2 text-gray-700 hover:bg-gray-50 rounded-md text-center font-medium text-lg uppercase'
              onClick={alterarMenu}
            >
              sou psicólogo
            </Link>

            {!userLogado && (
              <div className='mt-4 space-y-4 pb-2'>
                <div className='flex justify-center'>
                  <Link 
                    to="/cadastro" 
                    className='inline-block'
                    onClick={alterarMenu}
                  >
                    <BtnAjuda />
                  </Link>
                </div>
                
                <div className='flex justify-center'>
                  {botaoLogin}
                </div>
              </div>
            )}
          </div>
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