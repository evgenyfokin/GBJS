const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

const filteredList = Object.keys(numbers).reduce((acc, key) => {
    if (numbers[key] >= 3) {
        acc[key] = numbers[key]
    }
    return acc
},{})
console.log(filteredList)
