import React from 'react';
import { FaUserMd, FaBrain, FaHeartbeat, FaHandHoldingHeart } from 'react-icons/fa';

const Profissionais = () => {
    const profissionais = [
        {
            icon: <FaUserMd className="text-4xl text-primary" />,
            title: "Psiquiatras",
            description: "Especialistas em diagnóstico e tratamento médico."
          },
          {
            icon: <FaBrain className="text-4xl text-primary" />,
            title: "Psicólogos",
            description: "Terapeutas especializados em diversas abordagens."
          },
          {
            icon: <FaHeartbeat className="text-4xl text-primary" />,
            title: "Terapeutas",
            description: "Profissionais para acompanhamento contínuo."
          },
          {
            icon: <FaHandHoldingHeart className="text-4xl text-primary" />,
            title: "Especialistas",
            description: "Profissionais para necessidades específicas."
          }
    ];

    return (
      <section className='py-16 bg-zinc-100 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-3xl font-bold text-center mb-12'>Nossos Profissionais</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {profissionais.map((profi, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow'>
              <div className='mb-4'>{profi.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{profi.title}</h3>
              <p className='text-gray-600'>{profi.description}</p>          
            </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Profissionais;