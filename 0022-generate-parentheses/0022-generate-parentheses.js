/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // let stack = []
    // if n = 1 return ['()']
    // determine what a valid par are
        // if n = 3... then im going to have to have 3 open and 3 close
        // note* always has to be an open before a close
    
    let stack = []
    let res = []
    
    let backtrack = (open, close) => {
        if(open === n && close === n){
            return res.push(stack.join(''))
        }
        
        if(open < n){
            stack.push('(')
            backtrack(open + 1, close)
            stack.pop()
        }
        
        if(close < open){
            stack.push(')')
            backtrack(open, close + 1)
            stack.pop()
        }
        
    }
    
    backtrack(0,0)
    return res
    
    
    
    
};