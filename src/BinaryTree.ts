interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

class BinaryTreeNode<T> implements BinaryTreeNode<T> {
  constructor(
    public value: T,
    public left: BinaryTreeNode<T> | null = null,
    public right: BinaryTreeNode<T> | null = null
  ) {}
}

interface BinaryTree<T> {
  root: BinaryTreeNode<T> | null;
  insert(value: T): void;
  search(value: T): boolean;
  inOrderTraversal(): T[];
  preOrderTraversal(): T[];
  postOrderTraversal(): T[];
}

class BinaryTree<T> implements BinaryTree<T> {
  constructor(public root: BinaryTreeNode<T> | null = null) {}

  public insert(value: T): void {
    if (!this.root) {
      this.root = new BinaryTreeNode<T>(value);
      return;
    }

    let tmp: BinaryTreeNode<T> | null = this.root;
    let prev: BinaryTreeNode<T> = this.root;
    let goLeft: boolean = true;

    while (tmp) {
      goLeft = Math.random() < 0.5;
      prev = tmp;
      tmp = goLeft ? tmp.left : tmp.right;
    }

    const newNode = new BinaryTreeNode<T>(value);

    if (goLeft) {
      prev.left = newNode;
    } else {
      prev.right = newNode;
    }
  }

  public search(value: T): boolean {
    function traverse(r: BinaryTreeNode<T> | null): boolean {
      if (!r) return false;
      if (r.value === value) return true;
      return traverse(r.left) || traverse(r.right);
    }

    return traverse(this.root);
  }

  public preOrderTraversal(): T[] {
    const res: T[] = [];
    function traverse(root: BinaryTreeNode<T> | null) {
      if (root) {
        res.push(root.value);
        traverse(root.left);
        traverse(root.right);
      }
    }
    traverse(this.root);
    return res;
  }

  public inOrderTraversal(): T[] {
    const res: T[] = [];
    function traverse(root: BinaryTreeNode<T> | null) {
      if (root) {
        traverse(root.left);
        res.push(root.value);
        traverse(root.right);
      }
    }
    traverse(this.root);
    return res;
  }
  public postOrderTraversal(): T[] {
    const res: T[] = [];
    function traverse(root: BinaryTreeNode<T> | null) {
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
