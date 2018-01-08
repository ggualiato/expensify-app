var nameVar = 'Giovanni'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

const fullName = 'Giovanni Gualiato'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)

// function getPetName() {
//     const petName = 'Floyd'
//     return petName
// }

// const petName = getPetName()
// console.log(petName)