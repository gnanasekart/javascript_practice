//Array declaration
let dishes = ["soap", "fry", "briyani", true, 101];

//push
dishes.push("fried rice", "jamun");//add at the last
//console.log(dishes);

//pop
dishes.pop()
//console.log(dishes);


//unshift - add the element in the first position
dishes.unshift("fish")
//console.log(dishes);


//shift - remove the element in the first position
dishes.shift()
//console.log(dishes);

//sort - sort in assending order
    //dishes.sort()
//console.log(dishes);

//reverse
    //dishes.reverse()
//console.log(dishes);

//length
//console.log(dishes.length);

//last element
//console.log(dishes[dishes.length-1]);

//copy of array
let newdishes = dishes
dishes.push("ice")
//console.log(newdishes)

//splice
dishes.splice(1, 3, "mutton")
//console.log(dishes);

dishes.values()
console.log(dishes);