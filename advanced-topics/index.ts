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
