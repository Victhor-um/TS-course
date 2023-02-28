"use strict";
/* // Основные типы

number string boolean
object
Array Tuples
Enum
*/
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName('Vic', 'tooor'));
const users = {
    firstName: 'Victor',
    lastName: 'Tr',
    city: 'Chelyabinsk',
    age: 33,
};
function getFullNameByObj(userEntity) {
    return `${userEntity.firstName} ${userEntity.lastName}`;
}
console.log(getFullNameByObj(users));
