/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    
    //sort people from lowest to highest
    //pointers at first and last
    //counter for boats
    //add everything together
    
    //1,2,2,3
    const sorted = people.sort((a,b) => a-b)
    let left = 0
    let right = people.length -1
    let counter = 0
    
    while(left <= right){
        let weight = sorted[left] + sorted[right];
        if(weight <= limit){
            left++ 
        }
        right--
        counter++   
        
    }
    
    return counter
    
    
};