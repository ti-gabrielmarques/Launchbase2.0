const usuarios = [
    {
        nome: "Gabriel",
        tecnologias: ["Java", "JavaScript", "Python"],
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    { 
        nome: "Carlos", 
        tecnologias: ["HTML", "CSS"],
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    { 
        nome: "Jasmine", 
        tecnologias: ["JavaScript", "CSS"],
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];


function exibeUsuarios(usuarios) {
    usuarios.forEach(usuario => {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`);
    });
}

function checaSeUsuarioUsaCSS(usuario) {
    return usuario.tecnologias.includes("CSS");
}

function calculaSaldo(receitas, despesas, nome) {
    const receita = somaNumeros(receitas);
    const despesa = somaNumeros(despesas);

    const saldo = receita - despesa;

    if(saldo < 0)
        console.log(`${nome} possui saldo NEGATIVO de ${saldo}`);
    else
        console.log(`${nome} possui saldo POSITIVO de ${saldo}`);
}

function somaNumeros(numeros) {
    let total = 0;

    numeros.forEach(numero => {
        total += numero;
    });

    return total;
  }

exibeUsuarios(usuarios);

usuarios.forEach(usuario => {
    if(checaSeUsuarioUsaCSS(usuario))
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
});

usuarios.forEach(usuario => {
    calculaSaldo(usuario.receitas, usuario.despesas, usuario.nome)
});

