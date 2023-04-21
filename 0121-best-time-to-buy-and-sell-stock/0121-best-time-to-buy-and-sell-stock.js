/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(list) {

    //two pointers, but i want to keep track of the difference
        // i want the left pointer to be smallest and the right pointer to the be           the biggest
    // start from 0,1
    // loop thru while r < list.length
    //if l >= r, then increment both
    // else find and store profit then  r++
    
    
    let profit = 0;
    let [l,r] = [0,1];
    
    while(r < list.length){
        if(list[l] >= list[r]){
            l = r
            r++
            
        } else {
            let sum = list[r] - list[l]
            profit = Math.max(profit, sum)
            r++
        }
    }
    
    return profit

};