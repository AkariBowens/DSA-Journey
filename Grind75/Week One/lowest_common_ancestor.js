/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //console.log(p);
    // How do I get ancestors?
    // if i start form the top, do i then just make note of ancestors of that node,
    // Do I keep track of the levels?
    // since the tree does left->right, I would do a LCA(left/right), until I see p and q in the lca, i would stop on that branch
    // continue in the other branch with LCA() until i see the other of p or q
    // All this while saving the common ancestor
    // So, if the numbers in example 1 were p=0, q=4, then the answer is two, it tests to see up until the number we are looking for
    // if they are in separate branches, then we go until we find where they meet
    // p = 3, q = 7 -- LCA = 6, root.val
    // Left < Right - Always, but the right child is greater than the parent? at least when it isn't balanced, but never greater than the root; on the left child of the root
    
    if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }

    
    // if p and q is greater/less than root, search the lower/or greater side
    // if they are split, the lca is the root
};
