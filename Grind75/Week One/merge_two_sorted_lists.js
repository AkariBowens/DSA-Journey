/**
    *Definition for singly-linked list. 
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }
*/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // iterate somehow
    // check which is greater
    // put lesser first, greater second
    // What if the list is like [1, 1, 1, 2, 3, 4] and [2, 4, 6, 8]
    // A linear approach will not work
    // It would end up [1, 2, 1, 4, 2, 6, 3, 8, 4]
    // So do i just have a consistent pointer at the number
    // Like while the number in the first list is less than the next number in the second list, keep looking at the number in the second list, until it is greater or the same, then next the number in the second list
    // While (linkedListOneNum < linkedListTwoNum) add then next list 1

    // Checks if one list is null, returns the other
    if(list1== null){
        return list2;
    }

    if(list2 == null){
        return list1;
    }

    // In example, list1.val returns 1,
    // list1.next returns [2, 4] - the rest of the list
    // returning the next pointer gives the function a list to use
    
    if(list1.val <= list2.val){
        // In the [1, 2, 4] example, this would be ([2, 4], [1, 3, 4])
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    
};
