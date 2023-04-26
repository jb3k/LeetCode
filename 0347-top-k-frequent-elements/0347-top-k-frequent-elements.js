/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    if(nums.length <= 1) return nums
    
    // count the freq in an obj
    // store values based on amount in an obj
        // loop thru the obj and store the values that had that count
    // loop thru the stored values backwards to the the most frequent elements and do this until the res arr has k values
    
    let obj = {}
    let freq = {}
    
    nums.forEach((num, i) => {
        if(!obj[num]) obj[num] = 0
        obj[num]++
        freq[i + 1] = []
    })
    
    for(let count in obj){
        let val = obj[count];
        if(freq[val]){
            freq[val].push(count)
        }  
    }
            
    let res = []    
    let keys = Object.keys(freq)
    
    for(let i = keys.length - 1; i >= 0; i--){
        let key = keys[i]
        for(let num of freq[key]){
            res.push(num)
            if(res.length === k) return res
        }
    }
    
    
};