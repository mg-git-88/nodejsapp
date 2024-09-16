const name = 'Max';
let age = 36;
const hasHobbies = true;

age = 37;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' +
        userName + 
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobbies
    );
}

const add = (a, b) => {
    return a + b;
}

console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));