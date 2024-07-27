function one(){
    let username = "hitesh"
    function two(){
        var website = "youtube"
        console.log(username);
    }
    console.log(website) //cannot accessible due to its scope, regardless of its datatype
    two()
}

one()