// length fala quantos elementos tem
var arr = [1,2,3,4,5];

console.log(arr.length);

// push adicona no fim do array
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop remove no fim do array
arr.pop();

console.log(arr);

// unshift adiocna no começo do array
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift remove do começo
arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(5));

console.log(Array.isArray(arr));
