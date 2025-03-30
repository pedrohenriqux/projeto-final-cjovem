import React from 'react';
import { Link } from 'react-router-dom';

import BtnAjuda from '../BtnAjuda/BtnAjuda';
import ImgHero from '../../assets/Hero/ImgHero.png';

const Hero = () => {
  return (
    <>
        <section className='bg-zinc-100 py-12 md:py-20 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24'>
            <div className=' mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-8'>
                <div className='md:w-1/2 space-y-6'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                        A Clínica <span className='text-primary'>+Mental</span> está aqui
                        para conectar você à <span className='text-secondary'>profissionais
                        qualificados</span>.
                    </h1>
                    <p className='text-lg text-gray-700'>Promovemos atendimentos personalizados
                        e acessíveis para solucionar seus impasses.
                        <span className='block font-semibold text-primary mt-2'>Venha para a +MENTAL</span>
                    </p>

                    <div className='mt-6'>
                        <Link to="/cadastro" className='inline-block'>
                            <BtnAjuda />
                        </Link>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img
                        src={ImgHero}
                        alt="Profissional de Saúde Mental"
                        className='rounded-lg max-w-full h-auto'
                    />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero;