// Write code below this line
function compareDifferentValues(m, n){
    if(m === n) return "Equal";
    if(m !== n) return "Not equal";
}
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
// Write code above this line
module.exports = compareDifferentValues;