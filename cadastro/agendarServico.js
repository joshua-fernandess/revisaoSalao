const { agendamentos, clientes, servicos } = require('../data');

function agendarServico(agendamento, idCliente, idServico){
    const cliente = clientes.find(cliente => cliente.id === idCliente);
    const servico = servicos.find(servico => servico.id === idServico);

    if (!cliente || !servico ) {
        throw new Error('Cliente/serviço não encontrado.');
    } else {
        agendamento.id = agendamentos.length + 1;
        agendamentos.push(agendamento);

    }

    
};

module.exports = agendarServico;