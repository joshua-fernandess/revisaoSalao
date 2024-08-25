let servicos = [{id: 1, nomeServico: 'Corte de cabelo Feminino', preco: 100.00 },
    {id: 2, nomeServico: 'Barba', preco: 20.00 },
    {id: 3, nomeServico: 'Corte de cabelo Masculino', preco: 50.00}
];
let clientes = [{id: 1, nomeCliente: 'Adriane', cpf: '12334455666', email:'adriane@gmail.comn', telefone:'42999667733'},
    {id: 2, nomeCliente: 'Rosana', cpf: '1233484734', email:'rosana@gmail.com' , telefone:'42999667733'},

];
let agendamentos = [{id:1, idCliente:1, idServico:1, data:'22/08/24', horario:'18:00'},
                   {id: 2, idCliente: 1, idServico: 1, data:'30/10/24', horario: '12:00'}
];


module.exports = {servicos, clientes, agendamentos};
