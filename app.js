const prompt = require('prompt-sync')();

const agendarServico = require('./cadastro/agendarServico');
const cadastrarCliente = require('./cadastro/cadastrarCliente');
const cadastrarServico = require('./cadastro/cadastrarServico');

const atualizarAgendamento = require('./edicao/atualizarAgendamento');
const removerAgendamento = require('./edicao/removerAgendamento');
const removerCliente = require('./edicao/removerCliente');
const removerServico = require('./edicao/removerServico');

const listarAgendamentos = require('./listar/listarAgendamentos');
const listarClientes = require('./listar/listarClientes');
const listarServicos = require('./listar/listarServicos');
const listarTodosAgendamentos = require('./listar/listarTodosAgendamentos');

function menu(){
    console.log(`
     1. Cadastrar serviço
     2. Cadastrar cliente
     3. Agendar Serviço
     4. Remover agendamento
     5. Remover cliente 
     6. Remover serviço
     7. Atualizar agendamento 
     8. Listar agendamentos
     9. Listar clientes
    10. Listar serviços
    11. Listas todos os agendamentos
    12. Sair
    `);

    let opcao = prompt('Digite a opção desejada: ');

    switch(opcao){
        case '1':
            let nomeServico = prompt('Digite o nome do serviço:');
            let preco = parseFloat(prompt('Digite o preço do serviço:'));
            cadastrarServico({nomeServico, preco});
            console.log('Serviço adicionado com sucesso!');
            menu();
            break;
        case '2':
            let nomeCliente = prompt('Digite o nome do cliente:');
            let cpf = prompt('Digite o CPF do cliente:');
            let email = prompt('Digite o e-mail do cliente');
            let telefone = prompt('Digite o telefone do cliente:');
            cadastrarCliente({nomeCliente, cpf, email, telefone});
            console.log('Cliente adicionado com sucesso!');
            menu();
            break;
        case '3':
            let idCliente = parseInt(prompt('Qual é o ID do cliente que deseja agendar? '));
            let idServico = prompt('Qual é ID do serviço? ');
            let data = prompt('Digite a data que desejar marcar o agendamento: ');
            let horario = prompt('Digite o horário para o agendamento: ');
            agendarServico({idCliente, idServico, data, horario});
            console.log('Agendamento concluído com sucesso!');
            menu();
            break;
        case '4':
            listarTodosAgendamentos();
            delAgendamento = parseInt(prompt('Digite o ID do agendamento para remover: '));
            removerAgendamento(delAgendamento);
            console.log('Agendamento removido com sucesso!');
            menu();
            break;
        case '5':
            listarClientes();
            delCliente = parseInt(prompt('Digite o ID do cliente para remover: '));
            removerCliente(delCliente);
            console.log('Cliente removido com sucesso!');
            menu();
            break;
        case '6':
            listarServicos();
            delServico = parseInt(prompt('Digite o ID do serviço para remover: '));
            removerServico(delServico);
            console.log('Serviço removido com sucesso!');
            menu();
            break;
        case '7':
            listarTodosAgendamentos();
            let id = parseInt(prompt('Escolha o agendamento (ID): '));
            let novoCliente = parseInt(prompt('Digite o ID do cliente: '));
            let novoServico = parseInt(prompt('Digite o novo ID do serviço: '));
            let novaData = prompt('Digite a nova data de agendamento: ');
            let novoHorario = prompt('Digite o novo horário do agendamento: ');
            atualizarAgendamento( id, {idCliente: novoCliente, idServico: novoServico, data: novaData, horario: novoHorario});
            console.log('Agendamento atualizado com sucesso!');
            menu();
            break;
        case '8':
            let idClienteAgendamentos = parseInt(prompt('Digite o ID do cliente que deseja ver o agendamento: '));
            listarAgendamentos(idClienteAgendamentos);
            menu();
            break;
        case '9':
            listarClientes();
            menu();
            break;
        case '10':
            listarServicos();
            menu();
            break;
        case '11':
            listarTodosAgendamentos();
            menu();
            break;
        case '12':
            console.log('Saindo do sistema... Até breve!');
            process.exit();
            break;
        default:
            console.log('Opção inválida!');


    }

}

menu();