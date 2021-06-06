const transport = ["bus", "car", "bicycle", "aeroplane"];

const elefound = (input, element) =>
input.some(ele => ele === element);
console.log(elefound(transport, "bus"));//true
console.log(elefound(transport, "phone"));//false