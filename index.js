// Função que devolve os valores que são maiores que a média
function valoresMaioresQueMedia(lista) {
    let soma = lista.reduce((a, b) => a + b, 0);
    let media = soma / lista.length;
    return lista.filter(valor => valor > media);
}

// Função que devolve o menor valor da lista
function menorValor(lista) {
    return Math.min(...lista);
}

// Função que devolve o valor da soma dos itens da lista
function somaDosItens(lista) {
    return lista.reduce((a, b) => a + b, 0);
}

// Função que devolve todos os valores que são menores que 20
function valoresMenoresQue20(lista) {
    return lista.filter(valor => valor < 20);
}

// Função que devolve o primeiro e o último valor da lista
function primeiroEUltimoValor(lista) {
    return [lista[0], lista[lista.length - 1]];
}
