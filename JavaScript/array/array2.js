const heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

heros.push(dc);// pushes the dc as a element in the heros array and doesnot return any new array
console.log(heros);
console.log(heros[3][1]); // accessing value "flash"

const arr1 = ["thor","ironman","spiderman"]
const arr2 = ["superman","flash","batman"]
const newarr = arr1.concat(arr2)// merges two array and returns a new array
console.log(newarr)

const newarr2 = [...arr1,...arr2]// spread operator
console.log(newarr2)

const anotherarray = [1,2,3,4,[5,6,7],8,[9,10],11]
const finalanotherarray = anotherarray.flat(Infinity);// returns a new array with all subarray elements concatenated into a single array
console.log(finalanotherarray)



console.log(Array.isArray("hitesh"))// checks if a array or not
console.log(Array.from("hitesh"))// creates an array from an iterable object
console.log(Array.from({name:"vanshaj"}))// gives empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))// returns a new array from set of elements