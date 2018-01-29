// console.log('destructuring.js is running');

// // Object Destructuring
// const person = {
//     name: 'Giovanni',
//     age: 20,
//     location: {
//         city: 'Santo André',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }
 
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

// Array Destructuring
const address = ['500 Av Paulista', 'São Paulo', 'São Paulo', '12312']

const [street, city, state, zip] = address

console.log(`You in ${city} ${state}`);

