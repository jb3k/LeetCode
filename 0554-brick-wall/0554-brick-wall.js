/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    // 5 slots you can break thru (cant go thru edges..)
    // 0-5 but cant be 0 or 5
    // number that 
    
    let countGap = {0: 0}
    
    for(let i = 0; i < wall.length; i++){
        let arr = wall[i]
        let total = 0
        for(let j = 0; j < arr.length - 1; j++){
            let gap = arr[j]
            total += gap
            if(countGap[total]) countGap[total]++
            else countGap[total] = 1
            
        }
    }
    let countArr = Object.values(countGap)
    return wall.length - Math.max(...countArr)
};