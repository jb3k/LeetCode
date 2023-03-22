/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    // makee a stack
    // loop thru asteroids
    // push first asteroid into stack
    // only push into stack if positive
    // if (asteroids[i] > 0) stack.push(a[i])
    // else let pop = stack.pop()
        //if Math.abs(pop) > Math.abs(asteroids[i])
        //stack.push(pop)
        // else if(Math.abs(pop)< Math.abs(a[i]))
        // i-- 
        // else continue
    // return stack
    
    
    let stack = []
    for(let i = 0; i < asteroids.length; i++){
        let a = asteroids[i];
        
        if(a < 0 && stack.length === 0 || stack[stack.length -1] < 0){
            stack.push(a)
        } else if(a > 0){
            stack.push(a)
        } else{
            let pop = stack.pop();
            if(Math.abs(pop) > Math.abs(a)){
                stack.push(pop)
            }else if(Math.abs(pop)< Math.abs(a)){
                i--
            }else {
                continue
            }  
            
        }
    }

    return stack
    
};