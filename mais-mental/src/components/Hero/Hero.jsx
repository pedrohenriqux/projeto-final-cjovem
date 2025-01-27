import React from 'react';

import BtnAjuda from '../BtnAjuda/BtnAjuda';
import ImgHero from '../../assets/Hero/ImgHero.png';

const Hero = () => {
  return (
    <>
        <section className='bg-zinc-100 overflow-hidden relative'>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
                    <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
                        <h1 className='text-xl lg:text-2xl font-bold !leading-snug'>
                            A Clínica <span className='text-primary'>+Mental</span> está aqui
                            para conectar você à profissionais qualificados e solucionar seus
                            impasses. Buscamos promover atendimentos personalizados e de baixo
                            custo. <span className='text-secondary'>Venha para a +Mental</span>
                        </h1>
                        <BtnAjuda />
                    </div>
                    
                </div>
                <div className='flex justify-center items-center'>
                    <img src={ImgHero} alt="ImgHero" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero;