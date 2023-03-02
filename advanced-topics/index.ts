function logId(id: string | number | boolean) {
  console.log(id);
}

logId(1);
logId('23');
logId(true);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: 1 } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

enum RequestTypes {
  GET = 'get',
  POST = 'post',
}
type httpMethod = 'post' | 'get';
type coolString = string;

function fetchWIthAuth(url: string, method: httpMethod) {
  fetch(url);
}

fetchWIthAuth('s', 'post');
// type User = {
//   name: string;
//   age: number;
//   skills: string[];
// };
type Role = {
  id: number;
};
// type USerWIthRole = User & Role

interface User {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}
interface UserWithRole extends User {
  roleId: number;
}

let user: User = {
  name: 'as',
  age: 33,
  skills: ['1', '2'],
  log() {
    return 'ha';
  },
};
interface UserDic {
  [index: number]: User;
}
