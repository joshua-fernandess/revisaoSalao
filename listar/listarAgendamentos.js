const { agendamentos } = require('../data');

function listarAgendamentos(){
    if (agendamentos === 0){
        throw new Error('Nenhum cliente encontrado.');
    } else {
        agendamentos.forEach(agendamento => {
            console.log(`
            ID Agendamento: ${agendamento.id}
            ID Cliente: ${agendamento.idCliente}
            ID Serviço: ${agendamento.idServico}
            Data: ${agendamento.data}
            Horário: ${agendamento.horario}`);
        });
    }
}

module.exports = listarAgendamentos;