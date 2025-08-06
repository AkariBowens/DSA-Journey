/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxDepth = function(root) {
    // Node-based height
  
    if(root == null){
        return 0;
    }

    // Saves current height to a variable
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);

    // Returns value of taller child
    return Math.max(leftHeight, rightHeight) + 1;
};
