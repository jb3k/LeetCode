/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    let res = [];
    let min = -Infinity;
    let rows = matrix.length;
    let cols = matrix[0].length; 
    let pacific = new Array(rows).fill().map(() => new Array(cols).fill(0));
    let atlantic = new Array(rows).fill().map(() => new Array(cols).fill(0));
    
    // left & right
    for (let row = 0; row < rows; row ++) {
        dfs(matrix, row, 0, min, pacific)
        dfs(matrix, row, matrix[0].length - 1, min, atlantic)
    }
    // top & bottom
    for (let col = 0; col <  cols; col ++) {
        dfs(matrix, 0, col, min, pacific)
        dfs(matrix, matrix.length - 1, col, min, atlantic)
    }
    
    for (let row = 0; row < rows; row ++) {
        for (let col = 0; col < cols; col ++) {
            if (pacific[row][col] == 1 && atlantic[row][col] == 1) {
                res.push([row, col])
            }
        }
    }
    return res;
    
};

const dfs = (matrix, r, c, prevVal, ocean) => {
    // 1. Check necessary condition.
    if (r < 0 || c < 0 || r > matrix.length - 1 || c > matrix[0].length - 1) return;
    if (matrix[r][c] < prevVal) return;
    if (ocean[r][c] == 1) return;
    
    // 2. Process call.
    ocean[r][c] = 1;
    
    // 3. Call dfs as needed.
    dfs (matrix, r - 1, c, matrix[r][c], ocean);
    dfs (matrix, r + 1, c, matrix[r][c], ocean);
    dfs (matrix, r, c - 1, matrix[r][c], ocean);
    dfs (matrix, r, c + 1, matrix[r][c], ocean);
}




    //has to reach both PA / AO... 
    // to find the PA / AO store the edge coordinates in a hashmap?
    // PA = {[0,0-4], 0-4,0}, AO = {[0-4, 4], [4, 0] }
    
    //loop thru every coordinate and check if helper function is true.. then add that coordiante to output



//helper function to do dfs checking n,e,s,w
    // pass in r, c, AO obj, PA obj   

    //if curr is >= n,e,s,w then it can go
    //if it can get to a coordinate in the PA obj and AO obj, return true


