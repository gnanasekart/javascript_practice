myNumber = [1, 5, 7];

//map()
let mySqnumbers = myNumber.map(element => element*element);

//map() with external function
const sqNumbers = element => element * element;

//map takes every single element from myNumber and pass it into mySqnumbers
let mySqnumbers = myNumber.map(sqNumbers);

//map() with external function with index
 const sqNumbers = (element, index) => {
 console.log("value of the index "+ index+" is "+ element);
 return element * element;
 };

//map() with Math.pow()
 let mySqnumbers = myNumber.map(
 element => Math.pow(element, 3)
 );
let mySqnumbers = myNumber.map(sqNumbers);

//map() with direct call to math.pow()

/*Math.pow(x, y)
map(element, index, array)
index in Math.pow is consider as exponential value
x = base value, y = exponential value
(x^0, x^1, x^2, x^3,....) 
*/

let mySqnumbers = myNumber.map(Math.pow);

console.log(myNumber);
console.log(mySqnumbers);

//-------------------------------------------------

//Map() JSON to Object

const postJson = [
'{"postId": 1122, "Qty": 5}',
'{"postId": 1123, "Qty": 6}'
];

const post = [];
//traditional forloop
postJson.forEach(element => {
    post.push(JSON.parse(element));
});

//forEach loop
for(let i=0; i< postJson.length; i++)
{
    post.push(JSON.parse(postJson[i]));
}

//map-option 1
const post = postJson.map(JSON.parse);

//map - option 2
const post = postJson.map(element => JSON.parse(element));

console.log(post);
console.log(post[0].Qty);