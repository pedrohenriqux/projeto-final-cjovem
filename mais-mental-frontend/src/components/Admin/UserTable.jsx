const UserTable = ({ pacientes, profissionais }) => {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {pacientes.map(paciente => (
                        <tr key={paciente.id_paciente}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {paciente.id_paciente}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {paciente.nome_paciente}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Paciente
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button className="text-blue-600 hover:text-blue-900 mr-2">
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}

                    {profissionais.map(profissional => (
                        <tr key={profissional.id_profissional}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {profissional.id_profissional}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {profissional.nome_profissional}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Profissional
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button className="text-blue-600 hover:text-blue-900 mr-2">
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;