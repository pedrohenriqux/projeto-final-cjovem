const ServiceTable = ({ atendimentos }) => {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paciente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profissional</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {atendimentos.map(atendimento => (
                        <tr key={atendimento.id_atendimento}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{atendimento.id_atendimento}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(atendimento.data_atendimento).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {atendimento.paciente.nome_paciente}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {atendimento.profissional.nome_profissional}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                    atendimento.status === "AGENDADO" ? "bg-yellow-100 text-yellow-800" :
                                    atendimento.status === "REALIZADO" ? "bg-green-100 text-green-800" :
                                    "bg-red-100 text-red-800"
                                }`}>
                                    {atendimento.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
          </table>
        </div>
    );
}

export default ServiceTable;