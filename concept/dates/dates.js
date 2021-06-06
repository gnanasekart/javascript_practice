let now = new Date();

let tomdate = now.getDate()+1;
let tom = now.setDate(tomdate);

//console.log(new Date(tom)); 

//------------------------------------------

//Find last day of the month
//month is index value
let dates = new Date("2021-02-03");

//console.log(new Date(dates.getFullYear(), dates.getMonth() + 1, 0).getDate());
//or

let year = dates.getFullYear();
let month = dates.getMonth() + 1;
let lastDate = new Date(year, month, 0);
let date = lastDate.getDate();
console.log(date);