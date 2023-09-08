class BinaryTreeNode {
    value;
    left;
    right;
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    root;
    constructor(root = null) {
        this.root = root;
    }
    insert(value) {
        if (!this.root) {
            this.root = new BinaryTreeNode(value);
            return;
        }
        let tmp = this.root;
        let prev = this.root;
        let goLeft = true;
        while (tmp) {
            goLeft = Math.random() < 0.5;
            prev = tmp;
            tmp = goLeft ? tmp.left : tmp.right;
        }
        const newNode = new BinaryTreeNode(value);
        if (goLeft) {
            prev.left = newNode;
        }
        else {
            prev.right = newNode;
        }
    }
    search(value) {
        function traverse(r) {
            if (!r)
                return false;
            if (r.value === value)
                return true;
            return traverse(r.left) || traverse(r.right);
        }
        return traverse(this.root);
    }
    preOrderTraversal() {
        const res = [];
        function traverse(root) {
            if (root) {
                res.push(root.value);
                traverse(root.left);
                traverse(root.right);
            }
        }
        traverse(this.root);
        return res;
    }
    inOrderTraversal() {
        const res = [];
        function traverse(root) {
            if (root) {
                traverse(root.left);
                res.push(root.value);
                traverse(root.right);
            }
        }
        traverse(this.root);
        return res;
    }
    postOrderTraversal() {
        const res = [];
        function traverse(root) {
            if (root) {
                traverse(root.left);
                traverse(root.right);
                res.push(root.value);
            }
        }
        traverse(this.root);
        return res;
    }
}
export default BinaryTree;
