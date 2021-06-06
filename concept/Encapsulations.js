class Food{
    #foodId = 100;
    foodItem = {
        1: "idly",
        2: "dosa",
        3: "puri"
    }

    getOrderId(){
        return this.#foodId;
    }

    setOrderId(order){
        this.#foodId = order;
    }
}

let foods = new Food();
foods.setOrderId(1002);
console.log(foods.getOrderId());