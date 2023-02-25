/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(str) {
    
    //strat:
    // add stuff to stack until its a ']'
        // once you get ] pop stuff off stack till '['
        // then add the new str back to stack till you get closing bracket
    
//     let stack = []
//     for(let i = 0; i < s.length; i++){
//         let char = s[i];
//         if(char === ']'){
//             let str = ''
//             let num
//             let prev = stack.pop()
//             while(stack.pop() !== '['){
//                 str += stack.pop()
//             }
//             stack.pop()
//             while(stack.pop() !== //number){
//                   num += stack.pop()
//             }
//             stack.push(Number(num) * str)    
//         }else{
//             stack.push(char)
//         }
        
        
//     }
    
//     return stack.join('')
    
    
    let stack = [];
    let currStr = '';
    let currNum = 0;
    
    for (let i = 0; i < str.length; i ++) {
        if (str[i] === '[') {
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if (str[i] === ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (str[i] >= '0' && str[i] <= '9') {
            currNum = currNum * 10 + Number(str[i]);
        } else {
            currStr += str[i];
        }
    }
    
    return currStr;
    
    
    
};