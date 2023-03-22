/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    
    const stack = []
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1]
        const curr = asteroids[i]
        if (last > 0 && curr < 0) {
			// colliding
            if (last + curr === 0) {
                stack.pop()
            } else if (Math.abs(last) < Math.abs(curr)) {
                stack.pop()
                i--
            }
			
        } else {
			stack.push(curr)
		}
    }
    
    return stack
    
    
    
    
    
    
    
    
    
    
};