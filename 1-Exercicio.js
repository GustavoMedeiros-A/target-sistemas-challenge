function soma(num) {
    // let indice = 13;
    let soma = 0;
    for (let index = 0; num < 13; index++) {
        num = num + 1
        soma = soma + num        
    }

    return soma
}

console.log(soma(0))