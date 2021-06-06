class sortset extends Set{

    sort(value){
        let sort = new Set(value);
        return Array.from(sort).sort();
    }

    reverse(value){
        let revsort = new Set(value);
        return Array.from(revsort).sort().reverse();
    }
}

let dishes = new Set();
dishes.add("mango").add("pineapple").add("banana").add("orange");
let sorting = new sortset();
console.log(sorting.sort(dishes));
console.log(sorting.reverse(dishes));

