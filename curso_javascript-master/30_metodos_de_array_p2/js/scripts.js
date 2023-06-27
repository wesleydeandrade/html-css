// splice adionar no meio do array
var arr = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);

console.log(arr);

// indexOf  acha o indice do elemento

console.log(arr.indexOf(5));


// join transfomra array em string
var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(","));


// reverse inverte o array , a ordem
console.log(arr2.reverse());