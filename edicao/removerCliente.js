const { clientes } = require('../data');

function removerCliente(delCliente){
    let index = clientes.findIndex(cliente => cliente.id === delCliente);
    if (index !== -1){
        clientes.splice(index, 1);
    } else if (clientes === 0){
        console.log('Nenhum cliente encontrado.');
    }

}

module.exports = removerCliente;