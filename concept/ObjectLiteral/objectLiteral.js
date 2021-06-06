
//Object literal
let myObject = {
    prop1: 10,
    prop2: "String",
    prop3: function(){
        console.log(this.prop1, this.prop2);
    }
};

//Enhanced Objeect literals
//Ex1 - shorthand property names

const num = 10;
const str = "hello world";
const bool = true;

const myObject1 = {
    num,
    str,
    bool,
    missing
};
//missing variable is not defined so it returns error - 
//missingVar is not defined

//Ex2 - shorthand method name

const myCar = (make, year) => {
  return {
    make,
    year,
    info(price) {
      return `${make} cost ${price}$`;
    },
  };
};

//by marking as {make} means it points to make within myCar function
//by marking {this.make} means it with in return {}
//by making info function as arrow function means it points to global object
//undefined cost 100$
// const myCar = (make, year) => {
//     return {
//       make,
//       year,
//       info: (price) => {
//         return `${this.make} cost ${price}$`;
//       },
//     };
//   };
  
const newCar = myCar("Auto", 2020);
console.log(newCar.info(100));


//Ex3- Computed property names
const BG_COLOR_PROP = "byColor";
const btn = {
    title: "Button 1",
    [BG_COLOR_PROP]: "blue"
};

const list = {
    options: ["option 1"],
    options: [BG_COLOR_PROP],
    [BG_COLOR_PROP]: "grey"
};

console.log(btn);
console.log(list);

//previously we accessed like
//bracket notation
console.log(btn[BG_COLOR_PROP]);
//dot notation
console.log(btn.bgColor);

//-------------------------------------------

//challenge

const photoGallery = (title, dimesions, date) => {
    return {
        title,
        dimesions,
        date,
        [dimesions]: true,
        info(){
            console.log(`Dimension of ${title} are ${date}`);
        },
        
        publishInfo(){
            console.log(`photo was published 
            ${Math.floor((new Date().getTime() - date.getTime()) / 1000)} seconds age`);
        }
    }   
};

const photo1 = photoGallery(
    "My dog",
    "1X2",
    new Date()
);

const testDimension1 = "1X2";
const testDimension2 = "1080x720";

photo1.info();

setTimeout(() => photo1.publishInfo(), 2000);

console.log(photo1[testDimension1]);//true
console.log(photo1[testDimension2]);//undefined