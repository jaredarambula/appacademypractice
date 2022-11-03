// function helloNode() {
//     return "Hello Node"
// }
// helloNode()
// console.log("Hello Node")



function costOfGroceries(groceries) {
    // Your code here
	let total = 0;
    let i = 0;
    
    while (i < groceries.length) {
        // adds to total
        
    	let grocery = groceries[i];
        
    	if (grocery == 'butter') {
            total += 1;
        } else if (grocery == 'cheese') {
            total += 5;
        } else if (grocery == 'eggs') {
            total += 2;           
        } else if (grocery == 'milk') {
            total += 3;             
        } else if (grocery == 'bread') {
            total += 4; 
        }
        
        i++;
    }
    
    return total;
}

const groceriesA = ['bread'];
costOfGroceries(groceriesA); // 8