/*
 const myArray = [10, "abc", true, {}, [], undefined, null, [1, 2]];

 console.log(true, myArray.includes(null));
 console.log(10, myArray.includes(true, 3));

 console.log(10, "starting from index 3", 
 myArray.includes("abc", 3));

 console.log("{}", myArray.includes({}));

 console.log("[]", myArray.includes([]));

//--------------------------------------------
//challenges

const tags = [
  ["js", "es6"],
  ["css", "box"],
  ["html", "web"],
];

const fruit = [
  { title: "orange", qty: 10 },
  { title: "banana", qty: 5 },
  { title: "Apple", qty: 10 },
];

const primitiveTypesArray = [25, "x", true, undefined, null];

/*
1. if the search element is object or array, you need 
to convert each element in array to string.
2. then apply includes method with argument that will also
converted to the string
3. if search element is not an object or array, then apply
include method and return result


const eleIncluded = (searchElement, array) => {
  if (typeof searchElement !== "object") {
    return array.includes(searchElement);
  }

  if (typeof searchElement === "object") {
    return array
      .map((element) => JSON.stringify(element))
      .includes(JSON.stringify(searchElement));
  }
};

console.log(eleIncluded(["css", "box"], tags));

console.log(eleIncluded({ title: "Apple", qty: 10 }, fruit));

console.log(eleIncluded({ title: "banana" }, fruit));

console.log(eleIncluded(25, primitiveTypesArray));


//------------------------------------------------

//challenge 2

const myNumber = [123, 50, 27];

//method 1
// const pushUnique = (array, element) => {
// if(array.includes(element)){
//   console.log(element+" already present");
// }else{
//   array.push(element);
// }};

//method 2
const pushUnique = (array, element) => 
array.includes(element)
? console.log(element+ " is already available")
: array.push(element);

pushUnique(myNumber, 50);
pushUnique(myNumber, 5);

console.log(myNumber);

pushUnique(myNumber, 5);
*/

