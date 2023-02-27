/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    // let stack = [num[0]]
    //if num.length === k return 0
    // for loop let n = num[i] let last = stack[stack.length - 1]
    // if k === 0, stack.push(n)
    // if n < last 
        // stack.pop(), stack.push(n), k--
    // return stack.join()
    
    const stack = [];
    let removed = 0;
    for(let n of num) {
        while(stack.length && n < stack[stack.length-1] && removed < k) {
            stack.pop();
            removed += 1;
        }
        stack.push(n);
    }
    
    // remove all remaining large numbers
    while(removed < k) {
        stack.pop();
        removed += 1;
    }
    
    // remove all beginning zeroes
    while(stack.length && stack[0] === '0') {
        stack.shift();
    }
    
    return stack.length ? stack.join('') : '0';
};