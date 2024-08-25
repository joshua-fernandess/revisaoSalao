const { agendamentos } = require('../data');

function atualizarAgendamento(id, novoAgendamento){
    let index = agendamentos.findIndex(agendamento => agendamento.id === id);
    if (index !== -1){
        agendamentos[index] = {id: id, ...novoAgendamento}
        console.log(`Agendamento com ID ${id} atualizado com sucesso!`);
    } else {
        console.log(`Agendamento com ID ${id} não encontrado.`);
    }
}

module.exports = atualizarAgendamento;