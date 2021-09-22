// Write code below this line
var fiveNumbers = "";
function inverseWhile(){
var i = 5;
    while(i >= 0){
        if(i != 0){
            fiveNumbers+=i+",";
            i--;
        }else {
            fiveNumbers+=i;
            i--;
        }
    }
    return fiveNumbers;
}

// Write code above this line
console.log(inverseWhile());
module.exports = inverseWhile;