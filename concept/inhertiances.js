class foodItem{
constructor(time){
    console.log("the response is :"+time);
}

briyani = ["chicken", "mutton", "egg"];
stength = 50

getTotalResponse(){
    return this.stength;
}

static count = 10;

static getRequest(){
    return this.count;
}

getparcel(){
    return true;
}
}

class newFoodItem extends foodItem {
constructor(time){
    super(time)
}
getparcel(){
    return false;
}

}

let branch = new foodItem("11:00");
let branchs = new newFoodItem("10:30");

console.log(branch.getTotalResponse());
console.log(foodItem.count);

//instanceOf
console.log(branch instanceof foodItem);