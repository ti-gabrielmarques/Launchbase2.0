const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);

const programadores = [
    {
        nome: "Gabriel",
        idade: 23,
        tecnologias: [{
            nome: "Java",
            especialidade: "Back-end"
        }]
    }
];

console.log(`O usuário ${programadores[0].nome} tem ${programadores[0].idade} e usa a tecnologia ${programadores[0].tecnologias[0].nome} com especialidade em ${programadores[0].tecnologias[0].especialidade}`);
