const alunos = [
    { nome: "Maria Clara Souza", nota: 8.2 },
    { nome: "Patricia Silva", nota: 3.9 },
    { nome: "Stella Santos", nota: 6.8 },
    { nome: "Ana Vaccani", nota: 8.5 },
    { nome: "Carlos Gonçalves", nota: 2.4 },
    { nome: "Luca Souza", nota: 4.8 },
    { nome: "Fernando Cunha", nota: 5.1 },
    { nome: "Julia Andrade", nota: 9.3 },
];

function filtrarAlunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados)