const mockData = {
    pacientes: [
        {
            id_paciente: 1,
            nome_paciente: "João Silva",
            email_user: "joao@exemplo.com",
            data_nascimento: "1990-05-15",
            genero: "MASCULINO"
        },
        {
            id_paciente: 2,
            nome_paciente: "Ana Oliveira",
            email_user: "ana@exemplo.com",
            data_nascimento: "1985-08-22",
            genero: "FEMININO"
        }
    ],
    
    profissionais: [
        {
            id_profissional: 1,
            nome_profissional: "Dra. Maria Souza",
            email_user: "maria@exemplo.com",
            especializacao: "PSICOLOGIA_CLINICA",
            faixa_etaria_atendimento: "ADULTOS"
        },
        {
            id_profissional: 2,
            nome_profissional: "Dr. Carlos Lima",
            email_user: "carlos@exemplo.com",
            especializacao: "TERAPIA_COGNITIVO_COMPORTAMENTAL",
            faixa_etaria_atendimento: "TODAS_AS_FAIXAS"
        }
    ],
    
    atendimentos: [
        {
            id_atendimento: 1,
            data_atendimento: "2023-10-25T14:00:00",
            status: "AGENDADO",
            paciente: { nome_paciente: "João Silva" },
            profissional: { nome_profissional: "Dra. Maria Souza" }
        },
        {
            id_atendimento: 2,
            data_atendimento: "2023-10-26T10:30:00",
            status: "REALIZADO",
            paciente: { nome_paciente: "Ana Oliveira" },
            profissional: { nome_profissional: "Dr. Carlos Lima" }
        }
    ],
    
    logs: [
        {
            id_log: 1,
            acao: "CRIAR_PACIENTE",
            user: { email_user: "admin@exemplo.com" },
            detalhes: "Paciente ID: 1",
            createdAt: "2023-10-24T09:15:00"
        },
        {
            id_log: 2,
            acao: "EDITAR_ATENDIMENTO",
            user: { email_user: "admin@exemplo.com" },
            detalhes: "Atendimento ID: 2 → Status: REALIZADO",
            createdAt: "2023-10-25T16:45:00"
        }
    ]
}

export default mockData;