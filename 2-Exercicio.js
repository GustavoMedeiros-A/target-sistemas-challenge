function fibonnaci(index) {
    let x = 0;
    let y = 1;
    for (let i = 0; i <= index ; i++) {
        let aux = y;
        console.log(x)
        if (x >= index) {
            if(x === index) {
                return "Faz parte"
            } else {
                return "Não faz"
            }
        } 
        y = y + x   
        x = aux 


    }
    return x
}

console.log(fibonnaci(11))