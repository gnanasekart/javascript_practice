
const sumNumber = (...num) =>{
    console.log(num);// 1 2 3 4
};

const sumNumbers = (a, b, ...num) =>{
    console.log(a);//1
    console.log(b);//2
    console.log(num);//3, 4
};
 
sumNumbers(1, 2, 3, 4);

const sumNum = (...num) => {
console.log(num);
return num
.reduce((sum, num) => sum + num, 0);
};

console.log(sumNum(1, 2, 3, 4));//10

const sumNum = (...num) => {
    console.log(num);
    return num
    .reduce((sum, num) => sum + num, 0);
    };
    
console.log(sumNum("abc", 2, 3, 4)); //0abc234

const sumNum = (...num) => {
console.log(num);
    return num
    .filter(num => typeof num === "number")
    .reduce((sum, num) => sum + num, 0);
    };
    
console.log(sumNum(1, "abc", 3, 4));

//Arguments in arrow function
const sumNum = (...num) => {
    
    //Uncaught ReferenceError: arguments is not defined
    //console.log(arguments);
    
    return num
      .filter(num => typeof num === "number")
      .reduce((sum, num) => sum + num, 0);
      };
        
    console.log(sumNum(1, "abc", 3, 4));
/*
    Arguments is an Object type so we cannot able to apply
    any array helper method over the arguments value
    arguments.reduce()
    arguments.sort

    We can convert this Object into array by using

    Array.from(arguments)
   */ 
    //regular function
    function sumNum(...num){
        console.log(num); //array
        console.log(arguments); //object
        return num
          .filter(num => typeof num === "number")
          .reduce((sum, num) => sum + num, 0);
          };

//arguments object into array

    function sumNum(...num){
    return Array.from(arguments)
       .filter(num => typeof num === "number")
       .reduce((sum, num) => sum + num, 0);
       };
            
        console.log(sumNum(1, "abc", 3, 4));
