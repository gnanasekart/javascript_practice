
//Example 1
const myNumber = [5, 10 , 6, 15];

//const sum = arrayInput => 
// arrayInput.reduce((accumulator, number) => {
//     console.log("Accumulator is "+accumulator+ " + number is "+number);
// return accumulator+number;
// },0);
//0 is beginning value for accumulator else it will start with 5

const sum = arrayInput => 
arrayInput.reduce((accumulator, number) => 
accumulator+number, 0);
console.log(sum(myNumber));

//Example 2 - reduce array of object to single array

const persons = [
{
    name: "tgs",
    age: 25
},
{
    name: "gnana",
    age: 27
},
{
    name: "sekar",
    age: 29
}
];

const personName = inputArray => 
inputArray.reduce((names, person)=>
{
    names.push(person.name);
    return names;
}, []);

//console.log(personName(persons));

//----------------------------------------

//example 3 - remove duplicates
 
/*
reduce(callbackfn: (previousValue: T, 
    currentValue: T, currentIndex: number,
     array: readonly T[]) => T): T
A function that accepts up to four arguments. 
The reduce method calls the callbackfn function one time 
for each element in the array.
Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.

both are mandatory values
Array.reduce(callbackfn, initial_accumulator);
callbackfn(current_value, index, array);
*/

const fruits = [
    "banana", "orange", "apple", "apple", "banana", "mango"
];

const uniquefruit = arrayOfFruit => 
arrayOfFruit.reduce((uniqueElement, fruit) =>
{
    if(uniqueElement.includes(fruit) !== true)
    uniqueElement.push(fruit);
    return uniqueElement;
}, []);

console.log(uniquefruit(fruits));

//------------------------------------
//challenge 1 - Array of Objects

const posts = [
    {
        title: "how to find?",
        postId: 321,
        comments: 2
    },
    {
        title: "it is es6?",
        postId: 123,
        comments: 4
    },
    {
        title: "react js",
        postId: 334,
        comments: 4
    }
];
//popularpost should return an array of postId of posts have 
//comments count is equal to commentQty

const commentQty = 4;
const popularPost = (posts, commentQty) => 
    posts.reduce((accum, post) => {
        if(post.comments >= commentQty)
        accum.push(post.postId);
           return accum;
}, []);

console.log(popularPost(posts, commentQty));


//challenge 2 - Array of Objects to Objects

const products = [
    {
        title: "ios",
        price: 500,
        qty: 2,
        catagory: "os"
    },
    {
        title: "android",
        price: 200,
        qty: 5,
        catagory: "os"
    },
    {
        title:"headphones",
        price: 50,
        qty: 20,
        catagory: "accessories"
    },
    {
        title:"digital",
        price: 5,
        qty: 2,
        catagory: "watches"
    }
];
var prodleng = products.length;
const qtyByCatagory = products =>
products.reduce((count, product) => {
count[product.catagory] = (count[product.catagory] || 0) +
product.qty;
return count;
}, {});

console.log(qtyByCatagory(products));

output-
{os: 7, accessories: 20, watches: 2}