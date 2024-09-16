// const person = {
//     name: 'Max',
//     age: 36,
//     greet: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// };

// Solution 1
const person = {
    name: 'Max',
    age: 36,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

// Solution 2
const person1 = {
    name: 'Max',
    age: 36,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person1.greet();