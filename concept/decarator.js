//normal function
function cookFood(itemname) {
    console.log(`menu item: ${itemname} is get ready ...`);
    return itemname;
}

//decarator function - it take single or multi functions as an argument
function findFood(func) {
    let cookOnce = new Map();
    //return itemname => {
    return function (itemname){
        if(cookOnce.has(itemname)){
        return cookOnce.get(itemname);
        }
        //let result = func.call(itemname); - another way 
        let result = func(itemname);
        cookOnce.set(itemname, result);
        return result;
    }
}

//function assignment
cookFood = findFood(cookFood);
cookFood("dosa");
cookFood("dosa");
cookFood("idly")