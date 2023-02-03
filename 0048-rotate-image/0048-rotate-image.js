/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let [l, r] = [ 0, matrix.length - 1]
    
    while( l < r){
        for(let i = 0; i < r - l; i++){
            let [top, bottom] = [l, r]
            
            //save top left space
            let topLeft = matrix[top][l + i];
            
            //top left = bottom left
            matrix[top][l + i] = matrix[bottom - i][l]
            
            //bottom left = bottom right
            matrix[bottom - i][l] = matrix[bottom][r - i]
            
            //bottom right = top right
            matrix[bottom][r - i] = matrix[top + i][r]
            
            //top left = top right
            matrix[top + i][r] = topLeft
            
        }        
        l+=1
        r-=1
    }
    
    
    
};