function switchCase(letter){
// Write code below this line
var animals;
    switch (letter) {
        case "a":
            animals = "antelope";
            console.log(animals); 
            break; 

        case "b": 
        animals = "bird";
        console.log(animals); 
        break; 

        case "c": 
        animals = "cat";
        console.log(animals); 
        break; 
            
    
        default: console.log("stuff"); 
            break;
    }
// Write code above this line
return animals;
} 

switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase(4);
module.exports = switchCase;