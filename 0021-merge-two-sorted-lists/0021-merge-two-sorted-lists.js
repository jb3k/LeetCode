/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
     
    //if no list1 && list2 return empty list
    //create new list
    // compare values of l1 and l2
    // if l1 val <= l2.val then new list1 = list.next
        // then move list1 pointer to next value
    //else you do the opposite
    //if you have no more values in 1 list then next value is just = to list with values
    
    // if(!list1 && !list2) return []
    
    let newList = tail = new ListNode();
    
    while(list1 && list2){
        
        if(list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        }else{
            tail.next = list2
            list2 = list2.next
        }
        
        tail = tail.next
        
    }
    
    // if(!list1) newList.next = list2
    // if(!list2) newList.next = list1
     tail.next = list1 || list2;
    
    return newList.next
    
    
};