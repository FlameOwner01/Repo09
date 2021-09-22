// Write code below this line
var myNumbers = "";
function myDoWhile() {
    var i=0;
    do{

if(i!=9){
    myNumbers += i + ", ";
}else myNumbers += i;

i++;
    } while( i < 10);

    return myNumbers;
}
console.log(myDoWhile());

// Write code above this line
module.exports = myDoWhile;