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
