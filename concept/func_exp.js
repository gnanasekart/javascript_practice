let i = 1;
const myInterval = setInterval(function() {
console.log("message is "+i);
i = i+1;
}, 2000);

setTimeout(function() {
clearInterval(myInterval);
}, 10000);