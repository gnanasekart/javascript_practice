//call back function in findElements

let locElements = function (loc, value){
if(loc == "id"){
return "findById using" +value;
}else if(loc == "name"){
return "findByName using" + value;
}else if(loc == "class"){
return "findByClass using" + value;
}
}

//locElement("id", "userName");


//Another efficient way


let findById = function(value){
return "findById using " + value;
}

let findByName = function (value){
return "findByName using" +value;
}

let findByClass = function (value){
return "findByClass using" +value;
}

let locElement = function(callback, value){
return callback(value)
}

console.log(locElement(findById, "username"));

