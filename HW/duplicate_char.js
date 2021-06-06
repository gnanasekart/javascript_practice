var resort = "saraswathi hotel";
var hot = new Map();
let chars = resort.split("")
console.log(chars);
chars.forEach(ch => {
if(hot.has(ch) ){
hot.set(ch, hot.get(ch)+1);
}
else{
    hot.set(ch, 1);
}
})
console.log(hot);