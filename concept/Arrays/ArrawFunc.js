let foodItems = [
{name: "Idly", type: "veg", price: 20, when: "breakfast"},
{name: "meals", type: "non veg", price: 50, when: "dinner"},
{name: "mini meals", type: "veg", price: 40, when: "lunch"},
{name: "Idly", type: "veg", price: 20, when: "dinner"},
{name: "dosa", type: "veg", price: 20, when: "dinner"}
]

let veg = foodItems.filter(function (item) {
    return item.when == "dinner";
}).filter(function (food) {
    return food.type == "veg";
}).map(function (food) {  // map - returns an array that contains the results.
    return food.price;
}).reduce(function (Previous, price) {
    //reduce - reduce the value inside the array into a single value
    return Previous + price;
})


//array func

let veg1 = foodItems.filter(item => item.when == "dinner")
                    .filter(food => food.type == "veg")
                    .map(food => food.price)
                    .reduce((Previous, price) =>  Previous + price)


 console.log(veg1);