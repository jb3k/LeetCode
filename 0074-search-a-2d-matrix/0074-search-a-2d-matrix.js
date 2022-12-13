/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    for(let i = 0; i < matrix.length; i++){
        let num = matrix[i]
        if(target <= num[num.length-1] && target >= num[0]){
            for(let j = 0; j <= num.length -1; j++){
                if(target === num[j]) return true
            } 
        }   
    }
    return false 
    
    
};