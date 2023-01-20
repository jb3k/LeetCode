/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     // Initialize length...
    let length = 0;
    // Create a loop starting from last character...
    for (let i = s.length - 1; i >= 0; i--) {
        // If the character is not a space...
        if (s.charAt(i) != ' ') {
            length++;
        }
        // Here it is the end of last word...
        else if(length != 0) {
            break;
        }
    }
    return length;
    
};