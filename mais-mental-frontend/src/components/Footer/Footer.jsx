import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-primary text-white py-16 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24'>
            <div className='mx-auto max-w-7xl px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='text-2xl font-bold mb-4'>
                            <span className='text-secondary'>+</span>Mental
                        </h3>
                        <p className='mb-4'>A clínica mais mental está aqui para conectar você à
                            profissionais qualificados.
                        </p>
                        <div className='flex space-x-4'>
                            <a href="/" className='hover:text-primary'><FaFacebook size={20} /></a>
                            <a href="/" className='hover:text-primary'><FaInstagram size={20} /></a>
                            <a href="/" className='hover:text-primary'><FaTwitter size={20} /></a>
                        </div>
                    </div>
          
                    <div>
                        <h4 className='text-xl font-semibold mb-4'>Contatos</h4>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2'>
                                <FaPhone /> +55 (88) 4002-8922
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaEnvelope /> contato@maismental.com
                            </li>
                        </ul>
                    </div>
          
                    <div>
                        <h4 className='text-xl font-semibold mb-4'>Links Rápidos</h4>
                        <ul className='space-y-2'>
                            <li><a href="/" className='hover:text-primary'>Início</a></li>
                            <li><a href="/cadastro" className='hover:text-primary'>Cadastro</a></li>
                            <li><a href="/grupos-de-apoio" className='hover:text-primary'>Grupos de Apoio</a></li>
                            <li><a href="/profissionais" className='hover:text-primary'>Profissionais</a></li>
                            <li><a href="/sobre-nos" className='hover:text-primary'>Quem Somos</a></li>
                        </ul>
                    </div>
                </div>
        
                <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
                    <p>&copy; {new Date().getFullYear()} Clínica +Mental. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;