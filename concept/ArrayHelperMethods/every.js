//Example 1

const myNumbers = [1, -4, 6, 2, -9];

const isPositive = element => 
typeof element == "number" && element > 0;

const everymethod = myNumbers.every(isPositive);

const somemethod = myNumbers.some(isPositive);

console.log(everymethod);
console.log(somemethod);

//----------------------------------

//Example 2

var items = [
    {
        title: "computer",
        qty: 10
},
 {
     title: "mobile",
     qty: 3
 }, 
 {
     title: "headphone",
     qty: 2
 }
];

if(items.every(item => item.quantity > 5))
console.log("all available");

if(items.every(item => item.qty > 0) &&
items.some(item => item.qty < 5)
)
console.log("some items available");

if(items.some(item => item.qty == 0))
console.log("some items sold");

//--------------------------------

//Challenge 1

const a = [5, "abc", 10, 1];
const b = [4, 5, 6, 10, 33];
const c = [44, 33, 22, 10];
const d = [30, 40, 10, 12, 5, 23];

const arrayCheck = inpArray => {

if(inpArray.some(element => typeof element != "number" ))
{
return "some elements are not numbers";
}

if(inpArray.every((element, index, array) =>
 index > 0 ? element >= array[index - 1]:true )) 
 {
    return "sorted in ascending";
 }

if(inpArray.every((element, index, array) => 
index > 0 ? element <= array[index-1]: true))
{
   return "descending order";
}
return "not sorted";
};

console.log(arrayCheck(a));
console.log(arrayCheck(b));
console.log(arrayCheck(c));
console.log(arrayCheck(d));
