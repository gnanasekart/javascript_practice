/*  Dynamic typing in JS *
let name;
console.log(name);

name = 15;
console.log(name);

name = false;
console.log(name);

name = {
x: true,
y: 10
};

console.log(name);

name.y = 20;
console.log(name);

name = null;// after null we cannot able to reassign

name.x = false;//uncaught TypeError: cannot set property 'x' of null


let myObj ={}; 
myObj = {
    a: 10,
    b: 20
};
console.log(myObj);

let mypost = {}
mypost.postTitle = "Object is ref"
mypost.postLikes = 0
mypost.shared = false
console.log(mypost)

mypost.postLikes = 1
console.log(mypost)

delete mypost.shared;
console.log(mypost)

let myObject = {
    a: 10
    };
    
    let copyOfMyObject = myObject;
    
    copyOfMyObject.b = false;
    console.log(myObject);
    console.log(copyOfMyObject);

    let myObject = {
        a: true,
        b: null,
        c: 25
        };
        
        console.log(myObject["a"]);
        //Uncaught ReferenceError: a is not defined
        
        console.log(myObject["b"]);//null
        
        const propertyName = "c";
        console.log(myObject[propertyName]); //25
        
        console.log(myObject["propertyName"]); //undefined
        
       // myObject["new" + "Property" + "Name"] 
        //or
        myObject["newPropertyName"] = "dynamically computed property name";
        
        console.log(myObject);
    
        
        
        let objectNested = {};
objectNested.nestedObject = {};

objectNested.nestedObject.a = null;

const newPropertyName = "b";

objectNested.nestedObject[newPropertyName] = true;

console.log(objectNested);



{ 
    var number = 4;
    var number = 20;
    let address = "tup";
    let address = "gnana";
    }
    
    console.log(number);
    console.log(address);
*/
    var cost = "50";
var ordercost = 340;
var total = ordercost - cost;
console.log(total);