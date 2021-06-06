/*
const prop = {
    noofseats: 4,
    wings: 15,
    range: 2400,
    speed: 400
}


Ex1
Each function in Js except arrow function, all has prototpye
property and can be used as a constructor function

prototype chain:
civilplane.prototype -> Object.prototype -> null

//Following functions have prototype property and are function constructors
//1.function declared using dunction declaration

//function civilPlane() {}

console.log(civilPlane.prototype);
//{constructor: f}

console.log(civilPlane.prototype.constructor === civilPlane);//true

console.log(civilPlane.prototype.__proto__ === Object.prototype);//true

//Anonymous function expressions assigned to the variable

const civilPlane = function() {};

console.log(civilPlane.prototype.constructor === civilPlane);//true
console.log(civilPlane.prototype.__proto__ === Object.prototype);//true

function civilPlane(props){
    this.noofseats = prop.noofseats;
}

const propForSmallPlane = {
    noofseats: 4
};

const smallPlane = new civilPlane(propForSmallPlane);

console.log(smallPlane);

console.log(smallPlane.__proto__ === civilPlane.prototype);

//Ex3
//if we use a common method means it will be added to every instance

function civilPlane(props){
    this.noofseats = props.noofseats;
    this.seatsInfo = function() {
    console.log(`no fo seats in plane is ${this.noofseats}`);
    }
}

const propForSmallPlane = {
    noofseats: 4
};

const propForLargePlane = {
    noofseats: 250
};

const smallplane = new civilPlane(propForSmallPlane);

const largeplane = new civilPlane(propForLargePlane);

//Ex4
//seperate the function from common function

function civilPlane(props){
    this.noofseats = props.noofseats;
}

civilPlane.prototype.seatInfo = function()
{
    console.log(`no fo seats in plane is ${this.noofseats}`);
}

const propForSmallPlane = {
    noofseats: 4
};

const propForLargePlane = {
    noofseats: 250
};

const smallplane = new civilPlane(propForSmallPlane);

const largeplane = new civilPlane(propForLargePlane);

//Another way of creating object or instance

//Object.create()

const Parent = {
    type: "Parent",
    typeInfo: function() {
        console.log(`hello from ${this.type}`);
    },
    modifyType: function(newType){
        this.type = newType;
    }
};

console.log(Parent.type);
Parent.typeInfo();

console.log(Parent.prototype);//undefined

const child = Object.create(Parent);

console.log(child.__proto__ === Parent);

//while creating Parent it will consider as Constructor of the Object

child.type = "Child";
child.typeInfo();

child.modifyType("modify");
child.typeInfo();

//Ex 5

prototype chain
CivilPlane.prototype > Airplane.prototype > Object.prototype


function Airplane(props){
    this.wingspan = props.wingspan;
    this.maxRange = props.maxRange;
}

Airplane.prototype.airplaneInfo = function() {
    console.log(`wingspan of the airplane is ${this.wingspan} and
     maximal range is ${this.maxRange}`);
}

//call parent function if it should add new props to each new instance
function CivilPlane(props){
    Airplane.call(this, props);
    this.noofseats = props.noofseats;
}

//Reassign value of the "prototype" using "Object.create"
CivilPlane.prototype = Object.create(Airplane.prototype);
//Create.Object will create empty Object with one property
//as __proto__

console.log(CivilPlane.prototype.__proto__ === Airplane.prototype);

console.log(CivilPlane.prototype.constructor === CivilPlane);

//make "constructor" property equal to the function itself
CivilPlane.prototype.constructor = CivilPlane;

console.log(CivilPlane.prototype.constructor === CivilPlane);

CivilPlane.prototype.seatInfo = function()
{
    console.log(`no fo seats in plane is ${this.noofseats}`);
}

const propForSmallPlane = {
    noofseats: 4,
    wingspan: 20,
    maxRange: 1000
};

const propForLargePlane = {
    noofseats: 250,
    wingspan: 60,
    maxRange: 3000
};

const smallplane = new CivilPlane(propForSmallPlane);

const largeplane = new CivilPlane(propForLargePlane);

//Challenge 

Insert new prototype Vehicle.prototype to the existing prototype chain

current chain
CivilPlane.prototype > Airplane.prototype > Object.prototype


updated chain
CivilPlane.prototype > Airplane.prototype > Vechicle.prototype > Object.prototype

two addtional prototype in Vechicle.prototype
1. maxspeed
2. weight

It should also contain method "vechileInfo" available for any
object down the prototype chain


output
smallplane.vechicleInfo(); //max speed of the vehicle is 800 and weight is 15

largeplane.vechicleInfo(); //max speed of the vehicle is 900 and weight is 40


function Vechicle(props){
    this.maxspeed = props.maxspeed;
    this.weight = props.weight;
}

Vechicle.prototype.VechicleInfo = function() {
    console.log(`max speed of the vechicle is ${this.maxspeed} and
     weight is ${this.weight}`);
}

function Airplane(props){
    Vechicle.call(this, props);
    this.wingspan = props.wingspan;
    this.maxRange = props.maxRange;
}

Airplane.prototype = Object.create(Vechicle.prototype);

Airplane.prototype.constructor = Airplane;

Airplane.prototype.airplaneInfo = function() {
    console.log(`wingspan of the airplane is ${this.wingspan} and
     maximal range is ${this.maxRange}`);
}

//call parent function if it should add new props to each new instance
function CivilPlane(props){
    Airplane.call(this, props);
    this.noofseats = props.noofseats;
}

//Reassign value of the "prototype" using "Object.create"
CivilPlane.prototype = Object.create(Airplane.prototype);

CivilPlane.prototype.constructor = CivilPlane;

CivilPlane.prototype.seatInfo = function()
{
    console.log(`no fo seats in plane is ${this.noofseats}`);
}

const propForSmallPlane = {
    noofseats: 4,
    wingspan: 20,
    maxRange: 1000,
    maxspeed: 800,
    weight: 15
};

const propForLargePlane = {
    noofseats: 250,
    wingspan: 60,
    maxRange: 3000, 
    maxspeed: 900,
    weight: 40
};

const smallplane = new CivilPlane(propForSmallPlane);

const largeplane = new CivilPlane(propForLargePlane);

smallplane.vechicleInfo(); //max speed of the vehicle is 800 and weight is 15

largeplane.vechicleInfo(); //max speed of the vehicle is 900 and weight is 40
*/

function product(props){
    this.price = props.price;
    }
    
    product.prototype.priceInfo = function(){
    console.log(`price of the product is ${this.price}`);
    }
    
    function ElectricDevice(props){
    product.call(this, props);
    this.energyEffClass = props.energyEffClass;
    }
    
    ElectricDevice.prototype = Object.create(product.prototype);
    
    ElectricDevice.prototype.constructor = ElectricDevice;
    
    ElectricDevice.prototype.energyInfo = function() {
    console.log(`Energy Eff Class is ${this.energyEffClass}`);
    };
    
    function TV(props) {
    ElectricDevice.call(this, props);
    this.model = props.model;
    this.diagonal = props.diagonal;
    }
    
    TV.prototype = Object.create(ElectricDevice.prototype);
    
    TV.prototype.constructor = TV;
    
    const propsForMyTV = {
     model: "A1620",
    price: 1200,
    energyEffClass: "A+",
    diagonal: 42
    };
    
    const myTV = new  TV(propsForMyTV);
    
    console.log(myTV);


myTV.energyInfo(); //Energy Eff class is A+

myTV.priceInfo(); //price of the product is 1200
 
myTV instanceof TV; //true
myTV instanceof ElectricDevice; //true
myTV instanceof product; //true
myTV instanceof Object; //true
    