class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.hasLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting
    }
}

const me = new Traveler('Giovanni Gualiato', 20, 'Santo André')

console.log(me.getGreeting())
console.log(me.getDescription());
// console.log(me.hasMajor());

const other = new Traveler()

console.log(other.getGreeting())
console.log(other.getDescription());
// console.log(other.hasMajor());