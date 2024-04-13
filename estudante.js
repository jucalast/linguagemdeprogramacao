class Estudante {
    constructor(nome, email, RA, curso, disciplinas) {
        this.nome = nome;
        this.email = email;
        this.RA = RA;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina() {
        return this.disciplinas[0];
    }

    ultimaDisciplina() {
        return this.disciplinas[this.disciplinas.length - 1];
    }
}

// Criando dois estudantes de exemplo
let estudante1 = new Estudante("João", "joao@email.com", "123456", "Ciência da Computação", ["Matemática", "Física", "Programação"]);
let estudante2 = new Estudante("Maria", "maria@email.com", "789012", "Engenharia de Software", ["Cálculo", "Estatística", "Algoritmos"]);

// Imprimindo os valores na tela
console.log(estudante1);
console.log("Primeira disciplina: " + estudante1.primeiraDisciplina());
console.log("Última disciplina: " + estudante1.ultimaDisciplina());

console.log(estudante2);
console.log("Primeira disciplina: " + estudante2.primeiraDisciplina());
console.log("Última disciplina: " + estudante2.ultimaDisciplina());
