import React from 'react';
import { FaCalendarAlt, FaFlask, FaHeadset, FaCommentAlt } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaCalendarAlt className="text-4xl text-primary" />,
            title: "Agendamento",
            description: "Agende consultas com rapidez e facilidade."
        },
        {
            icon: <FaFlask className="text-4xl text-primary" />,
            title: "Exames",
            description: "Resultados de exames disponíveis online."
        },
        {
            icon: <FaHeadset className="text-4xl text-primary" />,
            title: "Atendimento",
            description: "Todos os meios de falar com a clínica."
        },
        {
            icon: <FaCommentAlt className="text-4xl text-primary" />,
            title: "Feedback",
            description: "Compartilhe sua experiência conosco!"
        }
    ];

    return (
        <section className='py-16 bg-white px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24'>
            <div className='mx-auto max-w-7xl'>
                <h2 className='text-3xl font-bold text-center mb-12'>Nossos Serviços</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((service, index) => (
                        <div key={index} className='bg-zinc-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow'>
                            <div className='mb-4'>{service.icon}</div>
                            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-600'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;