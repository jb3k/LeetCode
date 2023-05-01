/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
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
