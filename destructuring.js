const person = {
    name: 'Max',
    age: 36,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// };

// object destructuring example
const printName = ({ name }) => {
    console.log(name);
};
printName(person);

const { name, age } = person;
console.log(name, age);

// array destructuring example
const hobbies = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

const coppiedHobbies = [...hobbies, 'programming'];
const [hobby11, , hobby33] = coppiedHobbies;
console.log(hobby11, hobby33);