// Write code below this line
function logicOrder(num){
    if(num < 50) return "Less then 50";
    else if(num < 100) return "Less then 100";
    else return "Greater then or equal to 100"
} 
console.log(logicOrder(28));
console.log(logicOrder(50));
console.log(logicOrder(100));
// Write code above this line
module.exports = logicOrder;