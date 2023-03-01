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
const skills = [1, 'string'];
const id = skills[0];
const skillName = skills[1];
const arr = [1, 'sada', true, false];
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res2 = {
    message: 'Success',
    statusCode: StatusCode.SUCCESS,
};
// 1- SUCCESS
//2 - IN_PROCESS
// 3- FAILED
if (res2.statusCode === StatusCode.SUCCESS) {
}
