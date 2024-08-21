const { clientes, servicos } = require('../data');

function listarClientes(){
    if (clientes === 0){
        throw new Error('Nenhum cliente encontrado.');
    } else {
        clientes.forEach(cliente => {
            console.log(`ID Cliente: ${cliente.id}
            Nome: ${cliente.nomeCliente}
            CPF: ${cliente.cpf}
            E-mail: ${cliente.email}
            Telefone: ${cliente.telefone}`);
        })
    }
}

module.exports = listarClientes;