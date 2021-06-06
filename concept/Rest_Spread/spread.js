
//function call
const mygreeting = (name, city, age) =>{
    return `Hello ${name} your are from ${city} 
    when you are ${age} year's old`;
}

const arr1 = ['gnana', 'tirupur', 10];
console.log(mygreeting(...arr1));

const arr2 = ['chennai', 20];
console.log(mygreeting('sekar', ...arr2));

//concatenate arrays

const a = [1, 2, 3];
const b = [4, 5];

console.log(a.concat(b).concat(6, 7));//1, 2, 3, 4, 5, 6, 7

const c = [...a, ...b, 6];
console.log(c);

//create date

const date1 = [2025, 0, 10];
const date2 = [2025, 5, 10];

const d1 = new Date(...date1);
const d2 = new Date(...date2);
console.log(d1);//Jan 10 2025
console.log(d2);//Jun 10 2025

//copy array
const myarray = ["a", 5, [], true];

const newArray = [...myarray];//this is shallow copy
newArray.push(10);//myArray is not mutated
newArray[2].push(3);//myArray is mutated
//shallow copy will do at the first level only,
//deeper level of copy will affect the original value
console.log(newArray);
console.log(myarray);

//copy object(ES2018)
const myObject = {a: 10, b: "c", d: [1, 2] };

const copied = {...myObject};
console.log(myObject);

copied.a = 20;//myobject is not mutated
copied.d.pop();//myobject is mutated

console.log(copied);
console.log(myObject);

//spread string

const myStr = "Hello World";
const letter = [...myStr];
console.log(letter);//["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

const splits = myStr.split("");
console.log(splits);//["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

const splits1 = myStr.split(" ");
console.log(splits1);//["Hello", "World"]

//---------------------------------------------------------

//challenge 1
/*
create a function that will accept any qty of arguments, gather
them into single array and return means value of all 
arguments rounded to 2 decimal places.

type of returned value must be number

if at least one element in the array is not a numbe then throw error
*/

const meansore = (...scores) => {
   if(scores.every(score=> typeof score === "number")){
    let value = scores
    .reduce((avg, score)=> {
        return avg + score / scores.length;
    }, 0)
   
    // unary + operator (or) parseFloat to convert to number from string 
    //return +value.toFixed(2);
   
    //to reduce the decimal value by using toFixed(no of digit after decimal)
    return parseFloat(value.toFixed(2));
   }
   else
   {
       throw new Error("not an number");
   }
};
const score1 = [0, 1.5, 2.5, 3.7];
const score2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const score3 = [1.3, 2.5, 1.9];
const score4 = ["abc", 1.3, true, 2.5, 1.9];

console.log(meansore(...score1));//1.93

console.log(meansore(...score1, ...score2));//2.83

console.log(meansore(...score1, ...score2, ...score3));//2.59

console.log(meansore(...score4));//error