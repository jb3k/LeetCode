/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length === 1) return nums
    return Math.max(help(nums.slice(1)), help(nums.slice(0,-1)))
    
};

var help = function(nums){
    let route1 = 0
    let route2 = 0
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let temp = Math.max(num + route1, route2)
        route1 = route2
        route2 = temp   
    }
    return route2  
}