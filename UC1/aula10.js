function removerDuplicados(arr) {
    return [...new Set(arr)];
}

let numero3 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados;", removerDuplicados(numeros3));

// solução para atividade 3 usando Set a também uma solução usando Filter:

function removerDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}



