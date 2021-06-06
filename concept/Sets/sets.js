let dish = new Set();

dish.add("gnana").add("sekar").add("gowri").add("shankar")

//size
//console.log(dish.size);

//get - no get method in set beacuse every thing in set is value not any key

//delete
dish.delete("sekar")
console.log(dish);

//has
console.log(dish.has("sekar"));

//forEach
dish.forEach(eachitem =>{
    console.log(eachitem);
})

//console.log(dish);
