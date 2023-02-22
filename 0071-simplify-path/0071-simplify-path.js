/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    //create a stack and start with '/' in front
    // loop thru the string... starting from index 1
        // 2 conditionals i need to worry about loop
        // 1) if i have .. i want to remove both of them
        // 2) I only want 1 / between directories
    
    //conditional if last index in stack is '/' then pop it off and return joined the arr 
    
    let stack = [];
    path = path.split('/');
    
    for (let i=0;i<path.length;i++) {
        if (path[i]=='.' || path[i]=='') continue;
        if (path[i]=='..') stack.pop();
        else stack.push(path[i]);
    }
    
    return '/'+stack.join('/');
    
    
    
    
};