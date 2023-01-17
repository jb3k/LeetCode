/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
        
    // build a helper function that checks directions... 
        // find '1', searching up/down/left/right
    
    // while there are coordinates, keep looping,
        // run function to find 1s 
    
    let count = 0
    
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c++){
         
            if(grid[r][c] === '1'){
                count++
                helper(grid, r, c)                
                
            }
        }
    }
    
    return count  
    
}

function helper(grid, row, col){
    
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') return
    
    //set curr to 0 because we are already done looking at it
    
    grid[row][col] = '0'
    
    helper(grid, row - 1, col)
    helper(grid, row + 1, col)
    helper(grid, row, col - 1)
    helper(grid, row, col + 1)
}

