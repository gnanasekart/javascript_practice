/*
Sorting Alg

Merge Sort

Bubble sort(stable)

Quick sort(unstable)

Insertion sort(stable)
*/

const num = [10, 5, 79, 27, 50, 14, 27];
var i = 0;
console.log(num.sort(
    (a, b) => {
        console.log(a, b);
        i++;
        return a -b;
    }
));
console.log("no of iteration = "+i);