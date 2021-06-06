
//Ex1 - declaration and assignment using object destructuring

const myObject = {
    a: 10,
    b: true
};

//regular
//const a = myObject.a;
//const b = myObject.b;

//const {a: a, b: b} = myObject;

//shorthand property 
const {a,b} = myObject;
console.log(a, b);

//Ex 2 - assignment using object destructuring and shorthand property names

const myObject = {
    a: 10,
    b: true
};
let a, b;
//following line error due to {a, b} is denotes as block
//{a, b} = myObject;
//to over come this error, need to define into expression
({a, b} = myObject);

console.log(a, b);

//Ex 3 - destructure non object value

const {a, b} = null;
//const {a, b} = undefined;
console.log(a, b);
//Uncaught SyntaxError: Identifier 'a' has already been declared

const val = undefined;
const {a, b} = val || {};
console.log(a, b); //undefined undefined

const myArr = [1, 2];
const { c, d, length } = myArr;//arrays are objects
console.log(c, d, length);//undefined undefined 2

//Ex 4 - change order of the properties 

const myObj = {
    a: 10,
    b: true
};

const { b, a,  } = myObj;
console.log(a, b);

//Ex 5 - rest operator in Object destructuring

const myObj = {
    a: 10,
    b: true,
    c: [],
    d: "abc",
    e: 20
}; 

const{a, d, ...rest} = myObj;
console.log(a, d, rest);

//this rest will contain only myObj value not its prototype,
//if we try to add any prototype to myObj means it will not
//added into rest 

Object.prototype.newProp = 1;
//this property will be added under prototype
__proto__:
   newProp: 1

//Ex 6 Default values

const myObj = {
    a: 10,
    b: true
};

const {
    a = 0,
    b = false,
    c = `default value`
} = myObj;

console.log(a, b, c);

//Ex 7 Default values and new variable names

const myObj = {
    a: 10,
    b: true
};

const {
    a: newA,
    b: newB,
    c: newC = `default value`
} = myObj;

console.log(newA, newB, newC);

const myObj = {
    a: 1,
    b: 2,
    nested: {
        c: 3,
        d: 4
    }
};

const {
    a,
    b,
    nested: {c, d: newD, e: newE = "default value"}
} = myObj;

console.log(a, b, c, newE);

//challenges 1

create function personInfo to match the output
Object that is returned by personInfo function must contain 
only shorthand property names

console.log(personInfo(person));

//output
{
    name: "Alice",
    personage: 19,
    origin: "England",
    homeCity: "London",
    frdQty: 0,
    recordCreatedAt: *current year*
}


const person = {
    name: "Alice",
    age: 19,
    location: {
        country: "England",
        city: "london"
    }
};

const personInfo = ({
     name: name,
    age: personage,
    location: {country: origin, city: homeCity},
    frdQty = 0,
    recordCreatedAt = new Date().getFullYear()
}) => {
        return {
            name,
            personage,
            origin,
            homeCity,
            frdQty,
            recordCreatedAt
        }
};

console.log(personInfo(person));


//challenge 2 - Obj Destructuring with array helper methods

create function processPosts will return new array of posts
some property names are changed and postId is incremented by 1000
original array of posts should not be mutated

output [
    {
        postId: 1234,
        postAuthor: "rob",
        postCommentQty: 5
    },
    {
        postId: 1334,
        postAuthor: "sandy",
        postCommentQty: 0
    },
    {
        postId: 1123,
        postAuthor: "mercy",
        postCommentQty: 6
    }

]
//
const posts = [
    {
        postId: 234,
        author: "rob",
        Qty: 5
    },
    {
        postId: 334,
        author: "sandy"
    },
    {
        postId: 123,
        author: "mercy",
        Qty: 6
    }
];

const processPost = posts => {
    return posts.map(({
            postId,
            author: postAuthor,
            Qty: postCommentQty = 0
        }) => ({
            postAuthor,
            postCommentQty,
            postId: postId + 1000
        })
    )
}

console.log(processPost(posts));
console.log(posts);

//challenge 3
use object destructuring with rest object properties
to remove specific properties from the object

ensure that variables that will be used for destructuring
 of the deleted properties will not be accessiable after
 the destructureing operation

output
{
    index: 4,
    email: "gnana@mail.com",
    name: "sekar",
    cardId: 435
}

let person = {
    _id: "2324354545",
    index: 4,
    processed: false,
    cart: ["item1","item2", "item3"],
    email: "gnana@mail.com",
    name: "sekar",
    cardId: 435
}

//this can be handled by method 1 deleting unwanted property
// delete person._id;
// delete person.cart;

//method 2
// let _id, precessed, cart;
//({_id, precessed, cart, ...person} = person);

//need to confirm element need not be there after delete
{
    let _id, precessed, cart;
({_id, precessed, cart, ...person} = person);
}

console.log(person);