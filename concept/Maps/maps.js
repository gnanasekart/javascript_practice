let hotals = new Map();

//size
//console.log(hotals.size);

//set
hotals.set(101, "gnana")
hotals.set(102, "sekar")
hotals.set(103, "GNANA")//value get override with 101

//delete
//hotals.delete(101);

//has(key: any): boolean
//console.log(hotals.has(101))

//clear
//hotals.clear();

//get
console.log(hotals.get(101))

//forEach
hotals.forEach((value, key, map)=> {
if(value == "gnana"){
    console.log(value + " "+ key);
}
})


//
for(key_s of hotals.keys()){
    console.log(key_s);
}

for(value_s of hotals.values()){
    console.log(value_s);
}

//console.log(hotals);

