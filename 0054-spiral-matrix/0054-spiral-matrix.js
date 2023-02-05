/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let [l, r] = [0, matrix[0].length]
    let [top, bottom] = [0, matrix.length]
    
    let res = []
    
    while(l < r && top < bottom){
        //to push the top row
        for(let i = l; i < r; i++){
            res.push(matrix[top][i])
        }
        top++
        
        //push right col
        for(let i = top; i < bottom; i++){
            res.push(matrix[i][r-1])
        }
        r--
        
        if(top < bottom){
            //pushing bottom row
            for(let i = r-1; i >= l; i--){
                res.push(matrix[bottom - 1][i])
            }
            bottom-- 
        }
     
        if(l < r){
            //pushing middle row     
            for(let i = bottom -1; i >= top; i--){
                res.push(matrix[i][l])  
            }
            l++      
        }
 
    }
    return res
    
    
};