/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    let map = {
        '(':')',
        '[':']',
        '{':'}',
    }
    
    for(let i=0;i< s.length;i++){
        if(map[s[i]]){
            stack.push(map[s[i]])
        }else{
            if(stack.pop() != s[i]){
               return false
            }
        }
    }
    
    return stack.length > 0 ? false : true;
  	
};
