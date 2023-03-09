function reverseJs(array) {
    const arrayReverse = []
    for (let i = 0; i < array.length; i++) {
        arrayReverse[i] = array[array.length - 1 - i]
    }

    return arrayReverse.join(' ')
}

console.log(reverseJs(['mario', 'am', 'I']))
console.log(reverseJs([3, 4, 6, 8, 10]))
console.log(reverseJs(["reverte", "que", "função", "um", "é", "Essa"]))

