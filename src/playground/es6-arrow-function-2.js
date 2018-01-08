const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

console.log(add(50, 1, 2))

const user = {
    name: 'Giovanni',
    cities: ['Santo André', 'São Paulo', 'Campinas'],    
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city )              
    }
}
console.log(user.printPlacesLived())

//Challenge
const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number )
    }

}
console.log(multiplier.multiply())