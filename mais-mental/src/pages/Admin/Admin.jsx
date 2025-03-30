import { useState } from 'react';
import { FiUsers, FiCalendar, FiActivity, FiUser, FiUserCheck } from 'react-icons/fi';
import LogsTable from '../../components/Admin/LogsTable';
import ServiceTable from '../../components/Admin/ServiceTable';
import StatsCard from '../../components/Admin/StatsCard';
import UserTable from '../../components/Admin/UserTable';
import mockData from '../../data/mockData';

const Admin = () => {
    const [abaAtiva, setAbaAtiva] = useState('usuarios');
    const { pacientes, profissionais, atendimentos, logs } = mockData;

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Painel Administrativo</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard 
                titulo="Pacientes" 
                valor={pacientes.length} 
                icone={<FiUser className="text-blue-500 text-xl" />} 
            />
            <StatsCard 
                titulo="Profissionais" 
                valor={profissionais.length} 
                icone={<FiUserCheck className="text-green-500 text-xl" />} 
            />
            <StatsCard 
                titulo="Atendimentos" 
                valor={atendimentos.length} 
                icone={<FiCalendar className="text-purple-500 text-xl" />} 
            />
            <StatsCard 
                titulo="Logs (7 dias)" 
                valor={logs.length} 
                icone={<FiActivity className="text-orange-500 text-xl" />} 
            />
        </div>

        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
            <button
                className={`flex items-center py-2 px-4 font-medium whitespace-nowrap ${
                    abaAtiva === 'usuarios' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setAbaAtiva('usuarios')}
            >
                <FiUsers className="mr-2" /> Usuários
            </button>

            <button
                className={`flex items-center py-2 px-4 font-medium whitespace-nowrap ${
                    abaAtiva === 'atendimentos' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setAbaAtiva('atendimentos')}
            >
                <FiCalendar className="mr-2" /> Atendimentos
            </button>

            <button
                className={`flex items-center py-2 px-4 font-medium whitespace-nowrap ${
                    abaAtiva === 'logs' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setAbaAtiva('logs')}
            >
                <FiActivity className="mr-2" /> Logs
            </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
            {abaAtiva === 'usuarios' && (
                <UserTable 
                    pacientes={pacientes} 
                    profissionais={profissionais} 
                />
            )}

            {abaAtiva === 'atendimentos' && (
                <ServiceTable atendimentos={atendimentos} />
            )}

            {abaAtiva === 'logs' && (
                <LogsTable logs={logs} />
            )}
        </div>
    </div>
  );
}

export default Admin;