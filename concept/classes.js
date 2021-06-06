class kitchen{
    //constructor
    constructor(name){
        console.log("the name is :"+name);
    }

//class level variable. scope within the class
 chefname = "gnana"
 no_of_chef = 2;
 isVeg = true;

 //function
 getChefName()
 {
     return this.chefname;
 }

 //dot notation
foodItem = {
    101: "idly",
    102: "dosa",
    103: "vadai"
}
}

//class reference
let hotel = new kitchen("malai");

//calling variable
console.log(hotel.chefname);

//calling functions
console.log(hotel.getChefName());

//calling dot notation
console.log(hotel.foodItem[101]);

//calling bracket notation
//even if the key is String or number we need to mention in double quote
//otherwise face error in some other cases

console.log(hotel.foodItem["101"]);