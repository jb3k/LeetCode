/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(list) {
  let pointer = 0
  let left = 0
  let right = 1
  
  while( right < list.length){
  	if(list[left] < list[right]){
    	let profit = list[right] - list[left]
        pointer = Math.max(pointer, profit)
    }
    else{
    	left = right
    }
    right++  
  }

  return pointer

};