/* // Основные типы

number string boolean
object
Array Tuples
Enum 
*/
let revenue: number = 1_000;
let bonus: number = 500;

let res: number = revenue + bonus;

console.log(res);

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
console.log(getFullName('Vic', 'tooor'));

const users = {
  firstName: 'Victor',
  lastName: 'Tr',
  city: 'Chelyabinsk',
  age: 33,
};
function getFullNameByObj(userEntity: {
  firstName: string;
  lastName: string;
}): string {
  return `${userEntity.firstName} ${userEntity.lastName}`;
}
console.log(getFullNameByObj(users));

const skills: [number, string] = [1, 'string'];
const id = skills[0];
const skillName = skills[1];

const arr: readonly [number, string, ...boolean[]] = [1, 'sada', true, false];
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILED,
}
const res2 = {
  message: 'Success',
  statusCode: StatusCode.SUCCESS,
};

// 1- SUCCESS
//2 - IN_PROCESS
// 3- FAILED

if (res2.statusCode === StatusCode.SUCCESS) {
}
