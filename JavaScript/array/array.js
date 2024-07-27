// javascript array are resizable and can contain mix of different data types.
// in javascript array copy operations create shallow copy rather than deep copy.
// shallow copy of an object is a copy whose properties share the same reference means if we change anything in the copy then 
// it will reflect in the original array.
// deep copy do not share the same reference 

let myArr = [1,2,3,4];
// console.log(myArr[1])

// Array Methods
console.log(myArr.push(5)) // appends the element at the end of the array and returns the length of the array
myArr.pop()// removes the last element from the array
myArr.unshift(9)// insert the element at the first index of the array
myArr.shift()// deletes the element from the first index
console.log(myArr.includes(9))// returns the boolean value and checks the given value is in the array or not`
console.log(myArr.indexOf(3))// retunrs the index of the 3 in the array if it not found then it returns -1
console.log(myArr.join(""))// adds all the element of array into a string with specified separator
//console.log(myArr)

// slice splice methods

let arr = [1,2,3,4,5]
console.log("A",arr)
const myn1 = arr.slice(1,3);// exclusive // doesnot affect the original array
console.log(myn1)
console.log("B",arr)
const myn2 = arr.splice(1,3);// inclusive and affects original array
// splice(index on which you insert or delete, number of items to be removed, the new elements to be added )
console.log(myn2)
console.log("C",arr)