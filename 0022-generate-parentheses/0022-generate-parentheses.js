/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //backtracking
    let stack = []
    let res = []
    let backtrack = (open, close) => {
        console.log(stack)
        //basecase
        if(open === n && close === n){
            return res.push(stack.join(''))
        }
        if(open < n){
            stack.push('(')
            backtrack(open + 1, close)
            stack.pop()
        }
        //close can never be greater than open because if not its invalid
        if(close < open){
            stack.push(')')
            backtrack(open, close + 1)
            stack.pop()
        }    
    }
    
    backtrack(0,0)
    return res
    
    
    
    
};