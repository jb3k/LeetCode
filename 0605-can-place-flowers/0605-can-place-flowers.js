/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    for (let i = 0; i < flowerbed.length ; i++) {
        let prev = i - 1 >= 0 ? flowerbed[i-1] : 0;
        let curr = flowerbed[i];
        let next = i + 1 < flowerbed.length ? flowerbed[i+1] : 0;
        
        if (prev == 0 && curr == 0 && next == 0 ) {
            flowerbed[i] = 1;
            n--;
        }
        if (n == 0) return true; //can greedily exit here
    }
    return n <= 0;
    
};