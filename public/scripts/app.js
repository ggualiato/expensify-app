'use strict';

var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};

console.log(add(50, 1, 2));

var user = {
    name: 'Giovanni',
    cities: ['Santo André', 'São Paulo', 'Campinas'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

//Challenge
var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};
console.log(multiplier.multiply());
