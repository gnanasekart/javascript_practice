let idly = {
    id: "1001",
    price: 15,
    type: "veg"
    }
    
    //idly.price = 5;
    //console.log(idly.price);
    
    let handler = {
    //obj - proxy object - idly
   // property - which property allow to change - type, id
    //value - which one should allow and not allow
    
    set: function(obj, property,value){
    if(value != 15){
    throw new TypeError("u not allow to change the price");
    }
    throw true;
    },
    get: function (obj, property){
    if(property in obj){
    return obj[property];
    }
    else
    {
    throw new TypeError("you do not have the property");
    }
    }
    }
    
    //let varname = new Proxy(target, handler);
    //target - object
    
    let proxyIdly = new Proxy(idly, handler);
    //proxyIdly.price = 5;
console.log(proxyIdly.type);