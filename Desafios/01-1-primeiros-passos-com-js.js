const pessoas = [
    {
    nome: "Gabriel",
    peso: 85,
    altura: 1.88,
    sexo: "H",
    idade: 23,
    contribuicao: 2
    }
]

function calculaImc(peso, altura, nome) {
    const imc = peso / (altura * altura);

    if(imc >= 30)
        console.log(`${nome} você está acima do peso`);
    else
        console.log(`${nome} você não está acima do peso`);
}

function calculaAposentadoria(idade, contribuicao, sexo, nome) {
    if(sexo == "H") {
        if(contribuicao >= 35 && idade + contribuicao >= 95)
            console.log(`${nome}, você pode se aposentar!`);
        else
            console.log(`${nome}, você ainda não pode se aposentar!`);
    }

    if(sexo == "M") {
        if(contribuicao >= 30 && idade + contribuicao >= 85)
            console.log(`${nome}, você pode se aposentar!`);
        else
            console.log(`${nome}, você ainda não pode se aposentar!`);
    }
}

calculaImc(pessoas[0].peso, pessoas[0].altura, pessoas[0].nome);
calculaAposentadoria(pessoas[0].idade, pessoas[0].contribuicao, pessoas[0].sexo, pessoas[0].nome)
