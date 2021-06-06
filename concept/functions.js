//function declaration
function name2() {
    console.log("hi this is normal function");
}

var expFunc = function name1() {
    console.log("this is exp function");
}

//arrow func or annonimus func
name3 = ()=>{
    console.log("this is arraw func");
}

//Scheduling - function with timeout
//setTimeout() - two arguments
setTimeout( function () {
    name3()},3000 
)
//or
setTimeout( ()=> {
    name3()},3000 
)

//-------
setTimeout(() => " ", 3000);

//name2();
//expFunc();
//name3();


//boiler plated code are generatly converted in to function - repeated code
//method are attached to class and it can be accessable with the help of class name or object
//functions are generic and it is not attached/depends to methods
