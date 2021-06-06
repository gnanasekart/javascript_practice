
//Ex1 = declaration and assignment using destructuring

const myArray = [1, 2, 3];

//regular declaration using bracket notation
let a, b, c;
a = myArray[0];
b = myArray[1];
c = myArray[2];

//declare in destructuring way
let [a, b, c]= myArray;

console.log(a, b, c);

//Ex2 - Assignment using array destructuring

const myArray = [1, 2, 3];
let a, b, c;
[a, b, c] = myArray;
const Array2 = [4, 5, 6];
[a, b, c] = Array2;

console.log(a, b, c);

//Ex 3 - more variables than elements in the array

const myArray = [`a`, "b"];
const [a, b, c] = myArray;
console.log(a, b, c);

//Ex4 - default value

const myArray = [`a`];
const [a, b, c = `c`] = myArray;
console.log(a, b, c);

//Ex 5 - skip element during destructuring
const myArray = [1, 2, 3, 4, 5];
const [,,a,,b] = myArray;
console.log(a, b);

//Ex 6 - rest operator in array destructuring
const myArr = [1, 2, 3, 4, 5];
 [a, b, c, ...d] = myArr; //rest operator
console.log(a, b, c, d);
const e = [...d]; // spread operator
e.push(6); //this will add specific to e
console.log(e);

//Ex 7 - delete first element
let myArray = [1, 2, 3, 4, 5, 6];

//to delete first element in the same array
//[, ...myArray] = myArray;

//to delete first element in different array without mutating
[, ...myArr] = myArray;
console.log(myArr);
console.log(myArray);

//Ex 8 - swap values

let x = 5, y = 10;
[y, x] = [x, y];

console.log(x, y);

//Ex 9 - destructuring in the function 
const myPost = [["post 1", 10], ["post 2", 20]];
myPost.forEach(([post, likes]) => {
    console.log(`${post} has ${likes} likes`);
});

//Ex 10 - nested array destructuring
const myArr = [1, 2, [3, 4]];
const [a, b, [c, d]] = myArr;
console.log(a, b, c, d);

//challenge
const qtyRange = [8, 29];

const process = ([minQty, maxQty, defaultQty = 0]) => {
    console.log(minQty);//8
    console.log(maxQty);//29
    console.log(defaultQty);//0
    return maxQty - minQty; //return 21
};
console.log(process(qtyRange));

//-------------------challenge 2-------------------

create a function that will accept any qty of arguments
this function return array of two elements
first element in the array is minimal value
second element in the array is maximal value 
24, 5, 34, 10
18, 23, 103, 70, 80, 25

let min, max;

//explicit return
const minMax= (...value) => {
return[
    value.reduce((min, num) => num < min ? num : min),
    value.reduce((max, num) => num > max ? num : max),
];
};

//implicit  return
const minMax= (...value) => [
        value.reduce((min, num) => num < min ? num : min),
        value.reduce((max, num) => num > max ? num : max),
];
    
[min, max] = minMax(24, 5, 34, 10);
console.log(min, max);

[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max);
