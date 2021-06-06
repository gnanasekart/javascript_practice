const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b);
let a1 = a;
console.log(a === a1);

const arrayEqual = (arrone, arrtwo) => 
arrone.length === arrtwo.length &&
arrone.every((element, index) => element === arrtwo[index]);

console.log(arrayEqual(a, b));