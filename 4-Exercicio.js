const faturamento = [
    {
        "estado": "SP", 
        "valor": 67836.43
    }, 
    { 
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado":"MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado":"Outros",
        "valor": 19849.53
    }]

function percentual(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i].valor
        // console.log(array[i].valor)
    }

    for (let j = 0; j < array.length; j++) {
        let percent = (100 * array[j].valor) / sum
        console.log(`O percentual de representação do estado de ${array[j].estado} foi de ${percent}`)   
    }

    return sum
}




console.log(`A soma total é ${percentual(faturamento)}`)