let chars = "paypal";

let splitchar = chars.split("");
let setCh = new Set();

splitchar.forEach(eachCh => {
    if(!setCh.has(eachCh)){
        setCh.add(eachCh)
    }
});
let setArray = [];
setCh.forEach(eachSetCh => {
    setArray.push(eachSetCh);
})
console.log(setCh);
console.log(setArray.join(""));