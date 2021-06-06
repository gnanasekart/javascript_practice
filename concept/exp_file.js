//1. named export - multiple

function type(){
return "typed successfully";
}

 function getText(){
return "received text successfully";
}

//2. default export - single occurence in the entire file
 
  function click(){
 return "clicking";
 }
 
//another way is by mentioning at bottom of the module

/*
export default {click}
export {type, getText}

//SyntaxError: Duplicate export of 'getText'
*/

export {click, type, getText}