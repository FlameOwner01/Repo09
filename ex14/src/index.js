// Write code below this line
var evenNumbers = "";
var evenInverseNumbers = "";
function myForLoop1(){
    for (let i = 0; i < 10; i+=2) {
       if(i != 8){
            evenNumbers += i + ", ";
        }else evenNumbers += i;
        
    } 
    return evenNumbers;
}
function myForLoop2(){
    for (let i = 8; i >= 0; i-=2) {
        if(i != 0){
             evenInverseNumbers += i + ", ";
         }else evenInverseNumbers += i;
         
     } 
     return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Write code above this line
module.exports = {
    myForLoop1,
    myForLoop2
}