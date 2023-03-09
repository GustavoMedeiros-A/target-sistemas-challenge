// function invoicingRead() {
    
// }

import json from "./dados.json" assert { type: "json" };

function smallerValue(json) {
    let smaller;
    for (let i = 0; i < json.length; i++) {
        if(i === 0) {
            smaller = json[i].valor;
        } 
        if (json[i].valor === 0 ) {
            console.log(`Valor 0 no dia ${json[i].dia} ignorado`)
        } else {
            if( smaller > json[i].valor) {
                smaller = json[i].valor;
            }  
        }
    }
        return smaller
}

function biggerValue(json) {
    let bigger = 0;
    for (let i = 0; i < json.length; i++) {
        if(json[i].valor === 0) {
            console.log(`Valor 0 no dia ${json[i].dia} ignorado`)
        } else {
            if(bigger < json[i].valor) {
                bigger = json[i].valor;
        }
    }
}
    return bigger

}

function average(json) {
    let sum = 0;
    for (let i = 0; i < json.length; i++) {
        sum += json[i].valor
    }
    const avg = sum / json.length
    let dayBigger = 0
    for (let j = 0; j < json.length; j++) {
        if(json[j].valor > avg) {
            console.log(`O dia ${json[j].dia} foi maior do que a média`)
            dayBigger = dayBigger + 1
        }
        
    }

    return dayBigger
}

console.log(`O menor valor é ${smallerValue(json)}`)
console.log(`O maior valor é ${biggerValue(json)}`)
console.log(`Existem ${average(json)} dias maiores que a média`)