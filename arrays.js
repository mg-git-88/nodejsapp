const person = {
    name: 'Max',
    age: 36,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['sports', 'cooking'];

// for (const hobby of hobbies) {
//     console.log(hobby);    
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby ));
// console.log(hobbies);

// hobbies.push('programming');
// console.log(hobbies);

// const coppiedHobbies = hobbies.slice();
// console.log(coppiedHobbies);

// spread operator usage example
const coppiedHobbies = [...hobbies, 'programming'];
console.log(coppiedHobbies);

// rest operator usage example
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, 5));
