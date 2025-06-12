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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(root === null){
        return root;
    }

    // Switches the values at each node
    const buffer = root.left;
    root.left = root.right; 
    root.right = buffer;

    // Inputs each node at left and/or right into the function recursively as the root for the next section
    invertTree(root.left);
    invertTree(root.right);

    return root;

};
