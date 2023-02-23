/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    //make a stack
    // use operators (to make long conditional and make sure ts a 32-but int)
    // loop thru tokens
        // if 
        // else stack.push(num)
    //return number in stack
    
    let stack = []
    for(let i = 0; i < tokens.length; i++){
        let t = tokens[i];
        if(t === '+'){
            let first = stack.pop()
            let second = stack.pop()
            let sum = first + second
            stack.push(sum)
        } else if(t === '-'){
            let first = stack.pop()
            let second = stack.pop()
            let sum = second - first
            stack.push(sum)
        } else if(t === '*'){
            let first = stack.pop()
            let second = stack.pop()
            let sum = first * second
            stack.push(sum)
        }else if(t === '/'){
            let first = stack.pop()
            let second = stack.pop()
            let sum = second / first > 0 ? Math.floor(second/first) : Math.ceil(second/first)
            stack.push(sum)
        } else {
            stack.push(Number(t))
        }
        
    }
    
    return stack.pop()
    
};