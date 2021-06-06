
const name = "Tgs";
const age = 20;

//simply printing in the console by template literals 
console.log(`${name} is ${age} years old`);

const checkAge = (arrayOfStrings, name, age)=>{
console.log(arrayOfStrings, name, age);
};
console.log(checkAge`${name} is ${age} years old`);

const checkAge = (arrayOfStrings, name, age, sum)=>{
console.log(arrayOfStrings, name, age, sum);
};
console.log(checkAge`${name} is ${age} years old ${2+2}`);

//-------------------------------------------------

const temp = num => 
`no is ${num}
This number is ${num > 10 ? `greater` : `lesser`} than 10
Sq root of number is ${Math.sqrt(num)}`;

const mynum = 9;
console.log(temp(mynum));

const mynum1 = 25;
console.log(temp(mynum1));

/*
---------------------------------------------

challenge

Create a function that will return a regular String

Notes-
1. Get all the arguments and extract all results of the
expressions to the separate array named as "vals"

2. "arrayOfStrings" - is the first parameter

3. no of arrayOfStrings lenght -1 is equal to the no of 
expression available 
"arrayOfStrings".length - 1 = "vals".length

4. concatenate elements in "arrayOfStrings" and "vals"
 using .reduce() method
 here need to concatenate 
 arayOfStrings        vals
 1st string  with   1st expression
 2nd                2nd
 3rd                3rd
 at last only 4th    - 

In this case we need to pull all the arguments inside the
function, because we dont know the exact count for every
template literals
 the is avariable called "arguments" it is available in
 traditional function not is annoyms arrow function Expression
 but this arguments is object so we can create object for this
 using 
 Array.from(arguments)
and we need to get the arguments from second position because
first one is arrayOfStrings it is already array remaining only we 
need to get, so delete the first one by slice()
Array.from(arguments).slice(1)
it will return all the element as new array without mutation of 
original array
*/

function taggedTemplate(arrayOfStrings){
//first slice
const vals = Array.from(arguments).slice(1);
console.log(arrayOfStrings);
console.log(vals);

//.reuduce((callbackfn), "");//callbackfn, initial accumulator
return arrayOfStrings.reduce((concatStr, str, index) => {

//in this line 4th index is shown as undefined for vals array
//return concatStr + str + vals[index]; 
//to remove last undefined value use ternary operator
return (concatStr + str +
    (vals[index] !== undefined ? vals[index] : "")); 
}, "");
}

//optimized way

function taggedTemplate(arrayOfStrings){
    const vals = Array.from(arguments).slice(1);
    return arrayOfStrings.reduce((concatStr, str, index) => 
    concatStr + str +
        (vals[index] !== undefined ? vals[index] : ""), "");
}    

//using arrow function and Rest Expression
const taggedTemplate = (arrayOfStrings, ...vals) => {
    return arrayOfStrings.reduce((concatStr, str, index) => 
    concatStr + str +
        (vals[index] !== undefined ? vals[index] : ""), "");
}  

//Test cases
const a = 10;
const b = 5;
const sum = taggedTemplate `sum of the two variables a(${a}) and b(${b}) is ${a+b}`;

console.log(sum);

const girl = "a";
const boy = "b";
const friend = taggedTemplate `${girl} and ${boy} are friends`;

console.log(friend);
/*
output - 
["sum of the two variables a(", ") and b(", ") is ", "", raw: Array(4)]
[10, 5, 15]
sum of the two variables a(10) and b(5) is 15
*/