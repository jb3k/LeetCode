/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    if(nums.length <= 1) return nums
    
    let obj = {} // {1:3, 2:2, 3:1}
    let freq = {} // { '1': [], '2': [], '3': [], '4': [], '5': [], '6': [] }
    nums.forEach((num, i) => {
        freq[i + 1] = []
        if(obj[num]) obj[num] += 1
        else obj[num] = 1    
    })
    
    // loop thru obj and add them to the freq based on their frequency
    for(let key in obj){
        let value = obj[key]
        freq[value].push(key)
    }
        
    let res = []
    //get keys of the freq obj so we can loop thru with reg for loop
    let keys = Object.keys(freq)
    for(let i = keys.length - 1; i >= 0; i--){
        let key = keys[i]
        for(let num of freq[key]){
            res.push(num)
            if(res.length === k) return res
        }
    }
    
    
};