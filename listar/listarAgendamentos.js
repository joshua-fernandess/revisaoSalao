const { agendamentos, clientes } = require('../data');

function listarAgendamentos(idCliente){
    const agendamentosCliente = agendamentos.filter( agendamento => agendamento.idCliente === idCliente);

    if(agendamentosCliente.length === 0){
        console.log(`Nenhum agendamento encontrado para o cliente com ID ${idCliente}.`);
        return;
    }
        console.log(`Agendamentos para o cliente ID ${idCliente}:`);
        agendamentosCliente.forEach(agendamento => {
        console.log(`
            ID: ${agendamento.id}, 
            Serviço ID: ${agendamento.idServico}, 
            Data: ${agendamento.data}, 
            Horário: ${agendamento.horario}`);
        });
        
}

module.exports = listarAgendamentos;