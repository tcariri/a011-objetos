const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataque: []
};

const investida = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}


const folhaNavalha = {
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}
pokemon1.ataque.push(investida,folhaNavalha)

const pokemon2 = {...pokemon1}
pokemon2.nome = 'Squirtle'
pokemon2.tipo = 'água'
pokemon2.ataque = jatoAgua = {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
}

console.log('bulbasaur e squirtle',pokemon1,pokemon2)

