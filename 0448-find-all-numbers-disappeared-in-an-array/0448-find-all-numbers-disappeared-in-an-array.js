/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    let res = []
    let count = 1
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(count) === -1){
            res.push(count)
        }
        count++
    }
    
    return res
    
    
};