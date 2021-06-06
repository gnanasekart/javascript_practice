/*
Es 6 Classes
classes dont change prototypal Inheritance behaviour
It just more simple and declarative way to create prototype chain

//Ex1 -class Declaring and instance of the class

class MyClass{}

const firstInstance = new MyClass();

firstInstance.__proto__ === MyClass.prototype; //true
MyClass.prototype.constructor === MyClass; //true
MyClass.prototype.__proto__ === Object.prototype; //true

//Ex2 - Hoisting(not hoisted)
class can be accessed only after its declaration in the code

const firstInstance = new MyClass();

class MyClass{}

//Ex3 - Class Expression

const MyClass  = class {};

const firstInstance = new MyClass();

console.log(firstInstance);//MyClass {}

console.log(firstInstance.__proto__ === MyClass.prototype);//true

//Ex4
constructor method in the class

class Color{
    constructor(props){
        this.type = props.type;
        this.color = props.color;
        this.interface = props.interface;
    }
}

const propsForColor = {
    type: "wire",
    color: "White",
    interface: "Bluetooth"
};

const Wire = new Color(propsForColor);

Ex5 - class is NOT obj literal and methods are not 
shorthand method names

Incorrect syntax

class Color{
    title: "My Title",
    constructor: function(props){
        this.type = props.type;
        this.color = props.color;
        this.interface = props.interface;
    }
}

Correct syntax of class in ES6

class ClassName {
    constructor() {}
    method1() {}
    method2(props) {}
}

//Ex 6 - default values for property


class Color{
    constructor(props){
        this.type = props.type || "computer";
        this.color = props.color;
        this.interface = 
        props.interface !== undefined
        ? props.interface
        : "not specified";
    }
}

const propsForColor = {
    type: "wire",
    color: "White",
    interface: "Bluetooth"
};

const Wire = new Color(propsForColor);

const propsForGeneric = {
    color: "red"
    //type: ""
    //interface: ""
};

const genericMouse = new Color(propsForGeneric);

Note- 
Never assign "undefined" as a value for any variable. 
if variable should not have any value use "null" instead.

value "undefined" should be reserved for cases when variable 
doesn't exist.

Ex 7 - class methods

class ComputerMouse{
    constructor(props){
        this.type = props.type;
        this.color = props.color;
        this.interface = props.interface;
    }

    mouseInfo(){
        console.log(`type of mouse is ${this.type} and 
        color is ${this.color}`);
    }

    changeType(type){
        console.log(`type of mouse is ${type} and 
        color is ${this.color}`);
    }
}

const propsForColor = {
    type: "wire",
    color: "White",
    interface: "Bluetooth"
};

const Wire = new ComputerMouse(propsForColor);

console.log(Wire);

Wire.mouseInfo();

Wire.changeType("USB");

//Ex 8 - class extension (add new class to prototype chain)

class ComputerAccess{
    constructor(props){
        this.compact = props.compact || ["PC", "Mac"];
    }
}
 /*
class ComputerMouse extends ComputerAccess {
    Why compact property was swt if we dont call super() in 
computermouse class?
constructor of the computerAccess will be called automatically
}

//constructor without super()
class ComputerMouse extends ComputerAccess{
    constructor(props){
         
        //Must call super constructor in desired class before
        accessing 'this' or returning from derived constructor at new 
        computerMouse

        this.type = props.type;
    }
}

//super() is called without arguments

class ComputerMouse extends ComputerAccess{
    constructor(props){
        super(); 
        //cannot read property 'compact' of undefiend
        because in parent class we access the compact using 
        props.compact, but here without any param in super()
        we trying to access
        this.type = props.type;
    }
}

//default behaviour of constructor is absent
class ComputerMouse extends ComputerAccess{
    constructor(...allprops){ //rest
        console.log(allprops);
        super(...allprops); //spread
    }
}


class ComputerMouse extends ComputerAccess{
    constructor(props){
        super(props);
        this.type = props.type;
    }
}

const myMouse = new ComputerMouse({
    compact: ["Mac"]
});

console.log(myMouse);

myMouse.__proto__ >> ComputerMouse.prototype >> ComputerAccess.prototype 
>> Object.prototype > null

Ex 9 

class ComputerAccess{
    constructor(props){
        this.compact = props.compact || ["PC", "Mac"];
    }


compactInfo() {
    this.compact.forEach(ele => console.log(
        `Access is compactable with ${ele}`
    ));
}
}

class ComputerMouse extends ComputerAccess{
    constructor(props){
        super(props);
        this.type = props.type;
    }

    mouseInfo() {
        console.log(`type of mouse is ${this.type}`);
    }
}

const myMouse = new ComputerMouse({
    compact: ["Mac"],
    type: "optical"
});

console.log(myMouse);

myMouse.mouseInfo();
myMouse.compactInfo();

//Ex 10 - typeof and instanceof classes

class ComputerAccess{
    constructor(props){
        this.compact = props.compact || ["PC", "Mac"];
    }


compactInfo() {
    this.compact.forEach(ele => console.log(
        `Access is compactable with ${ele}`
    ));
}
}

class ComputerMouse extends ComputerAccess{
    constructor(props){
        super(props);
        this.type = props.type;
    }

    mouseInfo() {
        console.log(`type of mouse is ${this.type}`);
    }
}

const myMouse = new ComputerMouse({
    compact: ["Mac"],
    type: "optical"
});

console.log(typeof ComputerAccess);//function

console.log(myMouse instanceof ComputerMouse);//true

console.log(myMouse instanceof ComputerAccess);//true

console.log(myMouse instanceof Object);//true

console.log(typeof ComputerMouse.prototype);//object

console.log(typeof ComputerMouse.prototype.constructor);//function

console.log(ComputerMouse.prototype.constructor === ComputerMouse);//true


//Ex 11 - static method

class ComputerMouse{
    constructor(props){
        this.type = props.type;
    }

    static ownClassMethod(){
        console.log(`This is static method`);
    }

    mouseInfo(){
        console.log(`type of the mouse is ${this.type}`);
    }
}

const myMouse = new ComputerMouse({ type: "Gaming" });

console.log(myMouse);
console.log(myMouse.mouseInfo());

//console.log(myMouse.ownClassMethod());
//Uncaught TypeError: myMouse.ownClassMethod is not a function

//this error due to static method cannot be access by instance name
//accessable via class name and static method name
ComputerMouse.ownClassMethod();
*/

//challenge
create new class Extendedarray that extend buit-in Array
two custom methods to the new class
1. sum - should return sum of all elements in the array
2. onlyNumbers - should return new array that will contain
only numbers from the source array

Create several instances of the new EntendedArray class and test
both methods sum and onlynumbers


class Extendedarray extends Array{
    sum(){
        return this.reduce((sum, ele) => sum + ele);
    }

    onlyNumbers() {
        return this.filter(ele => typeof ele === "number")
    }
}

const firstInstance = new Extendedarray(2, 3, 5, 67,10);

console.log(firstInstance.sum());

console.log(firstInstance.onlyNumbers());


challenge

create new class "CustomArray" that extend built-in "Array"

Add one custom method "CustomPush" to the new class
this method will have one parameter "newElement"

1. add new elelemtn to existing array - dont use push method
2. modify length property of array (increment)
3. print this line in console
"New Element <ELEMENT> wa just added to the array"

create instance of the new CustomArray class and test new
method customPush and compare it with push

try to have a customPush instead of push in CustomArray class


 class CustomArray extends Array{
     customPush(newElement){
         this[this.length] = newElement;
//length property is updated automatically
         console.log(`New Element ${newElement} was just added to the array`);
     }
 }

 const firstInstance = new CustomArray();

 firstInstance.customPush(2);

