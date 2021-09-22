// Write code below this line
function myFunction(myParameter){
    if(myParameter===true){
        return "The parameter is true!"
    }
    if(myParameter!=true){
        return "The parameter is false!"
    }
}
console.log(myFunction(true));
console.log(myFunction(false));
// Write code above this line
module.exports = myFunction;