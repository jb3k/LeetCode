/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  
    //finding mid
        //two pointers, fast slow
        //while (fast.next.next)
            //move slow pointer 1
            //move fast pointer 2
    
    //reverse 2nd half
        //let secondHalf = slow.next
        //prev, cur, next
        //while curr
            //next = cur.next
            //cur.next = prev
            //prev = cur
            //cur = next
    
    //slow.next = null
    //reorder
        //h1 = head
        //h2 = cur
        //while(h1)
            //let next = h1.next
            //h1.next = h2
            //h1 = h2
            //h2 = next
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    
    let secondHalf = slow.next
    let prev = null
    let cur = secondHalf
    let next = null
    while(cur){
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
        
    }
    
    slow.next = null
    let h1 = head
    let h2 = prev
    console.log(h1, h2)
    while(h2){
        let next = h1.next
        h1.next = h2
        h1 = h2
        h2 = next
        
    }
    
    
    
    
    
    
    
};

