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
