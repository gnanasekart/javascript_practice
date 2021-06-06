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
/*
array are sorted in ascending order
which sorting algorithm is used here
sorting is stable or not?
why original products array is mutated?
*/
const sortproduct = products =>
products.sort((a, b) => a.price - b.price); 

sortproduct(products);

//console.log(products);

//----------------------------------

const persons = [
{
    name: "tgs",
    qty: 10, 
    index: 1
},
{
    name: "gnana",
    qty: 4,
    index: 2
},
{
    name: "sekar",
    qty: 5,
    index: 3
},
{
    name: "sk",
    qty: 2,
    index: 4
},
{
    name: "krishna",
    qty: 8,
    index: 5
},
{
    name: "manoj",
    qty: 2,
    index: 6
},
{
    name: "sham",
    qty: 1,
    index: 7
},
{
    name: "praveen",
    qty: 4,
    index: 8
},
{
    name: "gopi",
    qty: 3,
    index: 9
},
{
    name: "gopi1",
    qty: 2,
    index: 10
},
{
    name: "gopi2",
    qty: 2,
    index: 11
},
{
    name: "gopi3",
    qty: 2,
    index: 12
},
{
    name: "gop",
    qty: 2,
    index: 13
},
{
    name: "pi3",
    qty: 2,
    index: 14
}
];

const sortPerson = persons =>{
var itr = 0;
persons.sort((a, b) => {
    itr++;
return a.qty - b.qty;
return persons;
});
console.log("no of iteration = "+itr);
}

sortPerson(persons);
console.log(persons);