/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    // create a stack
    // loop thru asteroids
    // if(a[i] > 0 && stack[stack.length - 1] > 0) continue
    // else if(nums are === || a[i] > ) stack.pop()
            //else (a[i] < ) continue
    // return stack
    
    
//     let stack = []
//     for(let i = 0; i < asteroids.length; i++){
//         let num1 = asteroids[i]
//         let num2 = stack[stack.length - 1]
//         let opp1 = num1 > 0 && num2 < 0
//         let opp2 = num1 < 0 && num2 > 0
//         while(opp1 || opp2){
//             if(Math.abs(num1) < Math.abs(num2)) continue
//             else{
//                 stack.pop()
//             }
//         }
//         stack.push(num1)
        
//     }
//     return stack
    
    
        const stack = []
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1]
        const curr = asteroids[i]
        
        if (last > 0 && curr < 0) {
			// colliding
			
            if (last + curr === 0) {
				// last and curr collide and cancel each other out
                stack.pop()
            } else if (Math.abs(last) < Math.abs(curr)) {
				// last and curr collide and last is smaller
                stack.pop()
                i--
            }
			
        } else {
			// not colliding
			stack.push(curr)
		}
    }
    
    return stack
    
};