const StatsCard = ({ titulo, valor, icone }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <div className="p-3 rounded-full bg-white shadow-md mr-4">
                {icone}
            </div>

            <div>
                <p className="text-gray-500 text-sm">{titulo}</p>
                <p className="text-2xl font-bold">{valor}</p>
            </div>
        </div>
    )
}

export default StatsCard;