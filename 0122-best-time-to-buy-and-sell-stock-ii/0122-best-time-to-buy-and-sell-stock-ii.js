/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //create a helper func that finds the biggest profit
    
    let profit = 0
    for(let i = 1; i < prices.length; i++){
        let prev = prices[i-1]
        let cur = prices[i]
        if(cur > prev){
            profit += (cur - prev)
        }
    }
    return profit
    
};


