const LogsTable = ({ logs }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ação</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Admin</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Detalhes</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
                {logs.map(log => (
                    <tr key={log.id_log}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.acao}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.user.email_user}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{log.detalhes}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(log.createdAt).toLocaleString()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default LogsTable;