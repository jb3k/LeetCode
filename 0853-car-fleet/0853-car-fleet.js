/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // stack
    // car can never pass position ahead, they just become a fleet
    // if they get to target together its 1 fleet
    // group the fleets together into an arr and then push that total arr into stack
    // take the i of pos & speed to get to targ
    
    
    //if the pointer catches the highest pointer... then i just want to group
    
    const numberOfCars = position.length;
    let pair = [];
    position.forEach((ele, i) => { pair.push([position[i], speed[i]])}); // combine both array into one i.e position and speed
    pair.sort((a,b)=>b[0]-a[0]); // sort the array by position

    let stack = []; 
    for(let i = 0; i < numberOfCars; i++){
        let time = (target - pair[i][0]) / pair[i][1]
        stack.push(time)
        if(stack.length >= 2 && stack[stack.length -1] <= stack[stack.length -2]) stack.pop()
    }
    return stack.length
    
    
    
};