const name = 'Max';
let age = 36;
const hasHobbies = true;

age = 37;

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' +
        userName + 
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobbies
    );
}

console.log(summarizeUser(name, age, hasHobbies));