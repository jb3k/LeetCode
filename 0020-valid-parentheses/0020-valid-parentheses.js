/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    //want to have as a stack
    // make an object that stores the 3 char
    // loop thru s
        // push the first char into stack
        // conditional that checks if the value of the first 
        // 
    
    // return the stack length === 0
    let stack = []
    let hash = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let i = 0; i < s.length; i++){
        let bracket = s[i];
        if(bracket in hash){
            if(stack[stack.length - 1] === hash[bracket]){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(bracket) 
        }
        
        
    }
    
    return stack.length === 0
    
    

};
