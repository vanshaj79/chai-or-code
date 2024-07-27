// every nested function will have access to its parent variables and 
// they will be able to work with them and the scope that is formed is called lexical scope.

function outer(){
    const name = "Mozilla"
    function inner(){
        console.log("inner1",name)
    }
    function inner2(){
        console.log("inner2",name)
    }
    inner()
    inner2()
}
//console.log("outer",name)// not accessible outside the function
outer()


// closure is nothing but a function that is binded with its lexical scope even when the function is excuted outside that scope.
// variables in the closure are persisted between the function calls.
// closures have access to their own scope,the outer functions scope and the global scope.
// closures can be used to encapsulate the data, providing a way to create private variables so that they cannot be accessed directly from outside funciton.

function makefun(){
    const name = "Mozilla"
    function displayname(){
        console.log("displayname",name)
    }
    return displayname
}

const myfunction = makefun();// executing makefun() function which means the scope of this function gone or vanished and also it is removed from 
// execution context but memory plays into picture so while returning displayname function it returns with its lexical scope.
myfunction()

